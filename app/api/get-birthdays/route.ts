import { NextRequest } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export async function GET(req: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return new Response(JSON.stringify({ error: 'Missing Supabase config' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');

  if (!date) {
    return new Response(
      JSON.stringify({ error: 'Missing or invalid date parameter' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
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
          'Content-Type': 'application/json',
          apikey: SUPABASE_KEY,
          authorization: `Bearer ${SUPABASE_KEY}`,
        },
      },
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch birthdays' }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const data = await response.json();
    return new Response(data, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
