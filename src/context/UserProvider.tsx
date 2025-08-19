'use client';

import { TelegramAuthData } from '@telegram-auth/react';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { cookiesService } from '~/services/cookies';
import { authenticateTelegram } from '~/services/services';

const UserContext = createContext<{
  isLoading: boolean;
  user: TelegramAuthData | null;
  setUser: (user: TelegramAuthData | null) => void;
}>({
  isLoading: false,
  user: null,
  setUser: () => {},
});

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TelegramAuthData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const persistUser = (user: TelegramAuthData | null) => {
    setUser(user);

    if (user) {
      cookiesService.setTelegramUser(user);
    } else {
      cookiesService.removeTelegramUser();
    }
  };

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);

      const localUser = cookiesService.getTelegramUser();
      if (!localUser) return;

      const { data, error } = await authenticateTelegram(localUser);
      setIsLoading(false);

      if (error) {
        console.error('Error authenticating Telegram:', error);
        cookiesService.removeTelegramUser();
        return;
      }

      setUser(data ?? null);
    }

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ isLoading, setUser: persistUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
