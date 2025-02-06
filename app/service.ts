const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getBirthDays = async () => {
  try {
    const response = await fetch(
      `${API_URL}/functions/v1/get-upcoming-birthdays?date=2024-12-07`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};
