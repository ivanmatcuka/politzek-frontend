import { TelegramAuthData } from '@telegram-auth/react';
import Cookies from 'js-cookie';

export const AUTH_KEY = 'telegram_user';

export const cookiesService = {
  getTelegramUser(): null | TelegramAuthData {
    const user = Cookies.get(AUTH_KEY);
    return user ? JSON.parse(user) : null;
  },

  removeTelegramUser() {
    Cookies.remove(AUTH_KEY);
  },

  setTelegramUser(user: TelegramAuthData) {
    Cookies.set(AUTH_KEY, JSON.stringify(user));
  },
};
