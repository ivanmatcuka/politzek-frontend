const API_URL = process.env.NEXT_PUBLIC_API_URL;

type BirthdaysResponse = {
  data: {
    id: 'string';
    name: 'string';
    photo: 'string';
    date_of_birth: 'string';
  }[];
  targetDate: string;
  weekLater: string;
};

export const getBirthDays = async (
  formattedDate: string,
): Promise<BirthdaysResponse['data']> => {
  try {
    const response = await fetch(
      `${API_URL}/functions/v1/get-upcoming-birthdays?date=${formattedDate}`,
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

    return (await response.json()).data;
  } catch (error) {
    return [];
  }
};
