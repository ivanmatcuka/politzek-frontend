import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}

export async function GET(req: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return new Response(JSON.stringify({ error: 'Missing Supabase config' }), {
      headers: DEFAULT_HEADERS,
      status: 500,
    });
  }

  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');

  if (!date) {
    return new Response(
      JSON.stringify({ error: 'Missing or invalid date parameter' }),
      {
        headers: DEFAULT_HEADERS,
        status: 400,
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
          authorization: `Bearer ${SUPABASE_KEY}`,
          ...DEFAULT_HEADERS,
        },
      },
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch birthdays' }),
        {
          headers: DEFAULT_HEADERS,
          status: response.status,
        },
      );
    }

    const data = await response.text();
    return new Response(data, {
      headers: DEFAULT_HEADERS,
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      headers: DEFAULT_HEADERS,
      status: 500,
    });
  }
}
