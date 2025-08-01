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
  data: string | Record<string, string>,
  status: number,
  headers?: HeadersInit,
) => {
  const body =
    typeof data === 'string' ? data : JSON.stringify({ error: data });

  return new Response(body, {
    headers: headers ?? DEFAULT_HEADERS,
    status,
  });
};
