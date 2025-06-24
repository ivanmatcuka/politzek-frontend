import { NextRequest } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export async function GET(req: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return new Response(JSON.stringify({ error: 'Missing Supabase config' }), {
      status: 500,
      headers: DEFAULT_HEADERS,
    });
  }

  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');

  if (!date) {
    return new Response(
      JSON.stringify({ error: 'Missing or invalid date parameter' }),
      {
        status: 400,
        headers: DEFAULT_HEADERS,
      },
    );
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/get-upcoming-birthdays?date=${encodeURIComponent(
        date,
      )}`,
      {
        method: 'GET',
        headers: {
          apikey: SUPABASE_KEY,
          authorization: `Bearer ${SUPABASE_KEY}`,
          ...DEFAULT_HEADERS,
        },
      },
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch birthdays' }),
        {
          status: response.status,
          headers: DEFAULT_HEADERS,
        },
      );
    }

    const data = await response.text();
    return new Response(data, {
      status: 200,
      headers: DEFAULT_HEADERS,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: DEFAULT_HEADERS,
    });
  }
}
