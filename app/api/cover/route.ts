import { NextRequest, NextResponse } from 'next/server';

const requestLog = new Map<string, number[]>();
const MAX_REQUESTS_PER_SECOND = 4;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = requestLog.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < 1000);
  
  if (recentRequests.length >= MAX_REQUESTS_PER_SECOND) {
    return false;
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

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    if (!checkRateLimit(ip)) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    const imageUrl = `https://uploads.mangadex.org/covers/${mangaId}/${fileName}`;
    
    const response = await fetch(imageUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mikareads/1.0 (Educational Project)',
      },
    });

    if (!response.ok) {
      console.error(`MangaDex responded with ${response.status} for ${imageUrl}`);
      return NextResponse.json(
        { error: `Failed to fetch cover: ${response.status}` },
        { 
          status: response.status,
          headers: {
            'Cache-Control': 'public, max-age=60',
          }
        }
      );
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=604800, immutable',
        'CDN-Cache-Control': 'public, s-maxage=604800',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Cover API Route Error:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch cover image' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'public, max-age=60',
        }
      }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
