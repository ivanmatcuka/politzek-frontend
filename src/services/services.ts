import { TelegramAuthData } from '@telegram-auth/react';

import { API } from '~/utils/api';

const BASE_URL = process.env.baseUrl;

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
      `${BASE_URL}/api/get-birthdays?date=${encodeURIComponent(formattedDate)}`,
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
      `${BASE_URL}/api/get-releases?date=${encodeURIComponent(formattedDate)}`,
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

export const authenticateTelegram = async (data: TelegramAuthData) => {
  try {
    const response = await API.post<TelegramAuthData>(
      `${BASE_URL}/api/authenticate-telegram`,
      data as Record<keyof TelegramAuthData, unknown>,
    );

    return { data: response };
  } catch (error) {
    console.error('Error authenticating Telegram:', error);
    return { error: 'Failed to authenticate Telegram' };
  }
};

export const authorizeTelegram = async (data: TelegramAuthData) => {
  try {
    const response = await API.post<boolean>(
      `${BASE_URL}/api/authorize-telegram`,
      data as Record<keyof TelegramAuthData, unknown>,
    );

    return { data: response };
  } catch (error) {
    console.error('Error authorizing Telegram:', error);
    return { error: 'Failed to authorize Telegram' };
  }
};
