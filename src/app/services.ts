type BirthdaysResponse = {
  targetDate: string;
  weekLater: string;
  data: {
    date_of_birth: 'string';
    id: 'string';
    name: 'string';
    photo: 'string';
    slug: 'string';
  }[];
};

export const getBirthDays = async (
  formattedDate: string,
): Promise<BirthdaysResponse['data']> => {
  try {
    const response = await fetch(
      `/api/get-birthdays?date=${encodeURIComponent(formattedDate)}`,
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
