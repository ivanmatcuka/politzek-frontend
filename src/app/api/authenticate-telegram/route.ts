import { NextRequest, NextResponse } from 'next/server';

import { BirthdaysResponse } from '~/services/services';
import { API, DEFAULT_OPTIONS_RESPONSE, res } from '~/utils/api';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export async function OPTIONS() {
  return NextResponse.json({}, DEFAULT_OPTIONS_RESPONSE);
}

export async function POST(req: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res({ error: 'Missing Supabase config' }, 500);
  }

  const body = await req.json();

  if (!body) {
    return res({ error: 'Missing or invalid body' }, 400);
  }

  try {
    const response = await API.post<BirthdaysResponse>(
      `${SUPABASE_URL}/functions/v1/authenticate-telegram`,
      body,
      {
        authorization: `Bearer ${SUPABASE_KEY}`,
      },
    );

    if (!response) {
      return res({ error: 'Failed to authenticate Telegram' }, 404);
    }

    return res(response, 200);
  } catch (error) {
    return res({ error: 'Internal Server Error' }, 500);
  }
}
