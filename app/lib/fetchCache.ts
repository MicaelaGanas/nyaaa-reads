const cache = new Map<string, any>();

export async function fetchJsonCached(url: string, options?: RequestInit) {
  const key = url + (options ? JSON.stringify(options) : "");
  if (cache.has(key)) {
    return cache.get(key);
  }
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }
  const data = await res.json();
  // Don't cache error responses
  if (!data.error) {
    cache.set(key, data);
  }
  return data;
}

export function clearFetchCache() {
  cache.clear();
}
