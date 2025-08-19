'use client';

declare global {
  interface Window {
    Telegram: {
      Login: {
        auth: (
          options: { bot_id: string; request_access: boolean },
          callback: (data: TelegramAuthData) => void,
        ) => void;
      };
    };
  }
}

import { TelegramAuthData } from '@telegram-auth/react';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '~/components/atoms/Button/Button';

import styles from './TelegramButton.module.scss';

const TELEGRAM_LOGIN = process.env.NEXT_PUBLIC_TELEGRAM_NAME || '';
const TELEGRAM_BOT_ID = process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID || '';

type TelegramButtonProps = {
  onAuth: (data: TelegramAuthData) => void;
  onLoad?: () => void;
};

export const TelegramButton: FC<TelegramButtonProps> = ({ onAuth, onLoad }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', TELEGRAM_LOGIN);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'false');
    script.setAttribute('data-lang', 'ru');
    script.addEventListener('load', () => {
      setIsLoaded(true);
      onLoad?.();
    });

    const currentRef = ref.current;
    currentRef?.appendChild(script);

    return () => {
      currentRef?.removeChild(script);
    };
  }, [onLoad]);

  const onClick = useCallback(() => {
    if (!isLoaded) return;

    window.Telegram.Login.auth(
      {
        bot_id: TELEGRAM_BOT_ID,
        request_access: true,
      },
      onAuth,
    );
  }, [isLoaded, onAuth]);

  return (
    <>
      <div
        className={`${isLoaded ? styles['telegram-button'] : ''}`}
        ref={ref}
      />
      <Button disabled={!isLoaded} onClick={onClick}>
        Войти через Telegram
      </Button>
    </>
  );
};
