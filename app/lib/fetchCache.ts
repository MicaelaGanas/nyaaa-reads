const cache = new Map<string, any>();

export async function fetchJsonCached(url: string, options?: RequestInit) {
  const key = url + (options ? JSON.stringify(options) : "");
  if (cache.has(key)) {
    return cache.get(key);
  }
  const res = await fetch(url, options);
  const data = await res.json();
  cache.set(key, data);
  return data;
}

export function clearFetchCache() {
  cache.clear();
}
