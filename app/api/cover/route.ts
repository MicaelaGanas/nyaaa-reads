import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter
const requestLog = new Map<string, number[]>();
const MAX_REQUESTS_PER_SECOND = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = requestLog.get(ip) || [];
  
  // Remove requests older than 1 second
  const recentRequests = requests.filter(time => now - time < 1000);
  
  if (recentRequests.length >= MAX_REQUESTS_PER_SECOND) {
    return false; // Rate limit exceeded
  }
  
  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return true;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const mangaId = searchParams.get('mangaId');
    const fileName = searchParams.get('fileName');

    if (!mangaId || !fileName) {
      return NextResponse.json(
        { error: 'Missing mangaId or fileName parameter' },
        { status: 400 }
      );
    }

    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please slow down.' },
        { status: 429 }
      );
    }

    // Fetch cover image from MangaDex with retry logic
    const imageUrl = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`;
    
    let response;
    let retries = 3;
    
    while (retries > 0) {
      try {
        response = await fetch(imageUrl, {
          headers: {
            'User-Agent': 'Mikareads/1.0 (Educational Project)',
            'Referer': 'https://mangadex.org',
          },
          next: { revalidate: 86400 }, // Cache for 24 hours
        });

        if (response.ok) break;
        
        // If rate limited by MangaDex, wait before retry
        if (response.status === 429) {
          await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retries)));
          retries--;
          continue;
        }
        
        throw new Error(`Failed to fetch cover: ${response.status}`);
      } catch (err) {
        retries--;
        if (retries === 0) throw err;
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    if (!response || !response.ok) {
      throw new Error('Failed to fetch cover after retries');
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Return the image with aggressive caching
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, s-maxage=604800, stale-while-revalidate=86400',
        'CDN-Cache-Control': 'public, s-maxage=604800',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=604800',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Cover API Route Error:', error);
    
    // Return a placeholder or error response
    return NextResponse.json(
      { error: 'Failed to fetch cover image' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-cache',
        }
      }
    );
  }
}
