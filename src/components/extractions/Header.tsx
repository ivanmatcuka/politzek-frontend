'use client';

import { Grid } from '@mui/material';
import Link from 'next/link';

import { Logo } from '~/components/atoms/Logo/Logo';
import { Menu } from '~/components/molecules/Menu/Menu';

export const Header = () => (
  <Grid className="header" overflow="hidden" container>
    <Grid
      padding={{ lg: 10.75, sm: 2, xs: 1 }}
      pb={{ lg: 0, sm: 0, xs: 0 }}
      width="100%"
      item
    >
      <Grid
        justifyContent={{ lg: 'space-between', xs: 'center' }}
        margin="auto"
        maxWidth={1200}
        container
      >
        <Grid flex={1} lg={6} xs={12} item>
          <Grid container>
            <Grid flexBasis="191px" mr={1.5} item>
              <Link href="/">
                <Logo />
              </Link>
            </Grid>
            <Grid flexBasis="calc(100% - 203px)" item>
              <Menu
                items={[
                  {
                    element: <Link href="/#what">КАК ПОМОЧЬ</Link>,
                  },
                  {
                    element: <Link href="/prisoners">СПИСОК ПРЕСЛЕДУЕМЫХ</Link>,
                  },
                  {
                    element: <Link href="/donate">ПОЖЕРТВОВАТЬ ПРОЕКТУ</Link>,
                  },
                  {
                    element: (
                      <a href="https://t.me/politzek_org" target="_blank">
                        БЫТЬ НА СВЯЗИ
                      </a>
                    ),
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
