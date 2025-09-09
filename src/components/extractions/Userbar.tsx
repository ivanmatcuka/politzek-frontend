'use client';

import { TelegramAuthData } from '@telegram-auth/react';
import Link from 'next/link';
import { FC, useCallback } from 'react';

import { useUser } from '~/context/UserProvider';
import { authenticateTelegram } from '~/services/services';

import { AccountIcon } from '../icons/AccountIcon';
import { TelegramButton } from './TelegramButton/TelegramButton';

export const Userbar: FC = () => {
  const { setUser, user } = useUser();

  const onAuth = useCallback(
    async (data: TelegramAuthData) => {
      const { data: user } = await authenticateTelegram(data);
      setUser(user ?? null);
    },
    [setUser],
  );

  if (user) {
    return (
      <Link href="/profile">
        <AccountIcon />
      </Link>
    );
  }

  return <TelegramButton onAuth={onAuth} />;
};
