import type { NextApiRequest, NextApiResponse } from 'next';

const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!SUPABASE_KEY || !SUPABASE_URL) {
    res.status(500).json({ error: 'Missing Supabase config' });
    return;
  }

  const response = await fetch(`${SUPABASE_URL}/graphql/v1`, {
    method: req.method,
    headers: {
      apikey: SUPABASE_KEY,
      authorization: `Bearer ${SUPABASE_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(response.status).send(data);
}
