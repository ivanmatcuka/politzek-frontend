import { Box } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

import { Logo } from '~/components/atoms/Logo/Logo';
import { Menu } from '~/components/molecules/Menu/Menu';

import { Userbar } from './Userbar';

const MENU_DEFINITION = [
  {
    href: '/#what',
    label: 'КАК ПОМОЧЬ',
  },
  {
    href: '/prisoners',
    label: 'СПИСОК ПРЕСЛЕДУЕМЫХ',
  },
  {
    href: '/donate',
    label: 'ПОЖЕРТВОВАТЬ ПРОЕКТУ',
  },
  {
    href: 'https://t.me/enbv_avtozaklive',
    label: 'БЫТЬ НА СВЯЗИ',
    target: '_blank',
  },
];

const MENU_ITEMS = MENU_DEFINITION.map(({ href, label, target }) => ({
  element: (
    <Link href={href} target={target}>
      {label}
    </Link>
  ),
}));

type HeaderProps = {
  hideUserbar: boolean;
};

export const Header: FC<HeaderProps> = ({ hideUserbar }) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent={{ lg: 'space-between', xs: 'center' }}
      margin="auto"
      maxWidth={1200}
      overflow="hidden"
      p={{ lg: 10.75, sm: 2, xs: 1 }}
      pb={0}
    >
      <Box
        alignItems="center"
        display="flex"
        flex={1}
        flexDirection={{ lg: 'row', xs: 'column' }}
        gap={2}
        justifyContent="space-between"
      >
        <Box alignItems="center" display="flex" mt={2}>
          <Link href="/">
            <Logo />
          </Link>
          <Menu items={MENU_ITEMS} />
        </Box>

        {!hideUserbar && <Userbar />}
      </Box>
    </Box>
  );
};
