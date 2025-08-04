import { API } from '~/utils/api';

export type BirthdaysResponse = {
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

export type ReleasesResponse = {
  targetDate: string;
  data: {
    id: 'string';
    name: 'string';
    photo: 'string';
    release_date: 'string';
    slug: 'string';
  }[];
};

export const getBirthDays = async (
  formattedDate: string,
): Promise<BirthdaysResponse['data']> => {
  try {
    const response = await API.get<BirthdaysResponse>(
      `${process.env.SITE_URL}/api/get-birthdays?date=${encodeURIComponent(
        formattedDate,
      )}`,
    );

    return response?.data ?? [];
  } catch (error) {
    return [];
  }
};

export const getReleases = async (
  formattedDate: string,
): Promise<ReleasesResponse['data']> => {
  try {
    const response = await fetch(
      `${process.env.SITE_URL}/api/get-releases?date=${encodeURIComponent(
        formattedDate,
      )}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const { data } = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};
