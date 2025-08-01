import { Grid } from '@mui/material';

import { Button } from '~/components/atoms/Button/Button';
import { PageWithHeader } from '~/components/extractions/PageWithHeader';
import { Typography } from '~/components/typography/Typography/Typography';

import styles from './page.module.css';

export default function Maintainance() {
  return (
    <PageWithHeader>
      <Grid container>
        <Grid
          className={styles.header}
          padding={{ lg: 10.75, sm: 2, xs: 1 }}
          pt={{ lg: 0, sm: 0, xs: 0 }}
          width="100%"
          item
        >
          <Grid
            justifyContent={{ lg: 'space-between', xs: 'center' }}
            margin="auto"
            maxWidth={1200}
            container
          >
            <Grid flex={1} xs={12} item>
              <Grid mb={{ lg: 11, xs: 3 }} container>
                <Grid mb={{ lg: 4.5, xs: 1.5 }} mt={{ lg: 11.75, xs: 3 }} item>
                  <Typography color="brand.red" variant="h1">
                    Возвращайтесь в конце февраля
                  </Typography>
                </Grid>
                <Grid pl={{ lg: '101px', xs: 0 }} width="100%" item>
                  <Typography
                    lineHeight="32.74px"
                    margin="auto"
                    textAlign="left"
                    variant="subtitle1"
                  >
                    Скоро здесь будет информация о тех, кого российское
                    государство преследуют из-за войны в Украине. Следите за
                    анонсом в телеграм-канале проекта.
                  </Typography>
                </Grid>

                <Grid mt={{ lg: 11.75, xs: 3 }} item>
                  <Grid alignItems="start" container>
                    <Grid display={{ lg: 'block', xs: 'none' }} item>
                      <video
                        height={118}
                        src="/cat-walking.webm"
                        style={{ mixBlendMode: 'multiply' }}
                        width={190}
                        autoPlay
                        loop
                      />
                    </Grid>
                    <Grid
                      display={{ lg: 'none', xs: 'block' }}
                      flexBasis={{ lg: 'auto', xs: '140px' }}
                      item
                    >
                      <video
                        height={87}
                        src="/cat-walking.webm"
                        style={{ mixBlendMode: 'multiply' }}
                        width={140}
                        autoPlay
                        loop
                      />
                    </Grid>
                    <Grid
                      flexBasis={{ lg: 'auto', xs: 'calc(100% - 140px)' }}
                      pl={1.5}
                      item
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
