import { Grid } from '@mui/material';
import Link from 'next/link';

import { Logo } from '@/components/atoms/Logo/Logo';
import { Menu } from '@/components/molecules/Menu/Menu';

export const Header = () => (
  <Grid container overflow="hidden" className="header">
    <Grid
      item
      width="100%"
      padding={{ xs: 1, sm: 2, lg: 10.75 }}
      pb={{ xs: 0, sm: 0, lg: 0 }}
    >
      <Grid
        container
        maxWidth={1200}
        margin="auto"
        justifyContent={{ xs: 'center', lg: 'space-between' }}
      >
        <Grid item flex={1} xs={12} lg={6}>
          <Grid container>
            <Grid item mr={1.5} flexBasis="191px">
              <Link href="/">
                <Logo />
              </Link>
            </Grid>
            <Grid item flexBasis="calc(100% - 203px)">
              <Menu
                items={[
                  {
                    element: <Link href="/#what">КАК ПОМОЧЬ</Link>,
                  },
                  {
                    element: <Link href="/prisoners">СПИСОК ПРЕСЛЕДУЕМЫХ</Link>,
                  },
                  {
                    element: <Link href="#footer">ПОЖЕРТВОВАТЬ ПРОЕКТУ</Link>,
                  },
                  {
                    element: (
                      <a href="https://t.me/enbv_avtozaklive" target="_blank">
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
