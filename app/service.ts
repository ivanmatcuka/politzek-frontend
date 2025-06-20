const SUPABASE_URL = process.env.SUPABASE_URL;

type BirthdaysResponse = {
  data: {
    id: 'string';
    name: 'string';
    photo: 'string';
    date_of_birth: 'string';
    slug: 'string';
  }[];
  targetDate: string;
  weekLater: string;
};

export const getBirthDays = async (
  formattedDate: string,
): Promise<BirthdaysResponse['data']> => {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/get-upcoming-birthdays?date=${formattedDate}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};
