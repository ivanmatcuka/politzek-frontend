import { Grid } from '@mui/material';

import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';
import { PageWithHeader } from '@/src/components/PageWithHeader';

import styles from './page.module.css';

export default function Maintainance() {
  return (
    <PageWithHeader>
      <Grid container>
        <Grid
          item
          className={styles.header}
          width="100%"
          padding={{ xs: 1, sm: 2, lg: 10.75 }}
          pt={{ xs: 0, sm: 0, lg: 0 }}
        >
          <Grid
            container
            maxWidth={1200}
            margin="auto"
            justifyContent={{ xs: 'center', lg: 'space-between' }}
          >
            <Grid item flex={1} xs={12}>
              <Grid container mb={{ xs: 3, lg: 11 }}>
                <Grid item mt={{ xs: 3, lg: 11.75 }} mb={{ xs: 1.5, lg: 4.5 }}>
                  <Typography variant="h1" color="brand.red">
                    Возвращайтесь в конце февраля
                  </Typography>
                </Grid>
                <Grid item width="100%" pl={{ xs: 0, lg: '101px' }}>
                  <Typography
                    variant="subtitle1"
                    textAlign="left"
                    lineHeight="32.74px"
                    margin="auto"
                  >
                    Скоро здесь будет информация о тех, кого российское
                    государство преследуют из-за войны в Украине. Следите за
                    анонсом в телеграм-канале проекта.
                  </Typography>
                </Grid>

                <Grid item mt={{ xs: 3, lg: 11.75 }}>
                  <Grid container alignItems="start">
                    <Grid item display={{ xs: 'none', lg: 'block' }}>
                      <video
                        src="/cat-walking.webm"
                        autoPlay
                        height={118}
                        width={190}
                        loop
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </Grid>
                    <Grid
                      item
                      flexBasis={{ xs: '140px', lg: 'auto' }}
                      display={{ xs: 'block', lg: 'none' }}
                    >
                      <video
                        src="/cat-walking.webm"
                        autoPlay
                        height={87}
                        width={140}
                        loop
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </Grid>
                    <Grid
                      item
                      pl={1.5}
                      flexBasis={{ xs: 'calc(100% - 140px)', lg: 'auto' }}
                    >
                      <a href="https://t.me/+fl5X4ur0GsFmOTYy" target="_blank">
                        <Button>Хочу подписаться!</Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageWithHeader>
  );
}
