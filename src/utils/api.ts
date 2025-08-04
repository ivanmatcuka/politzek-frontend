const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export const DEFAULT_OPTIONS_RESPONSE = {
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*',
  },
};

export const res = (
  data: string | Record<string, unknown>,
  status: number,
  headers?: HeadersInit,
) => {
  const body = typeof data === 'string' ? data : JSON.stringify(data);

  return new Response(body, {
    headers: headers ?? DEFAULT_HEADERS,
    status,
  });
};

export const API = {
  async get<T = unknown>(
    uri: string,
    searchParams: Record<string, string> = {},
    headers: HeadersInit = {},
  ): Promise<T | null> {
    const url = new URL(uri);

    Object.entries(searchParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    try {
      const response = await fetch(url.toString(), {
        headers,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch from ${uri}:`, error);
      return null;
    }
  },
};
