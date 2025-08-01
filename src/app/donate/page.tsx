import { Box, Grid } from '@mui/material';
import Link from 'next/link';

import { Button } from '~/components/atoms/Button/Button';
import { PageWithHeader } from '~/components/extractions/PageWithHeader';
import { Typography } from '~/components/typography/Typography/Typography';

export default function Donate() {
  return (
    <PageWithHeader>
      <Box
        boxSizing="border-box"
        pt={{ lg: 0, sm: 0, xs: 0 }}
        sx={{ overflowX: 'clip' }}
        width="100%"
      >
        <Grid
          justifyContent={{ lg: 'space-between', xs: 'center' }}
          margin="auto"
          maxWidth={1200}
          container
        >
          <Grid flex={1} lg={6} xs={12} item>
            <Grid mb={{ lg: 11, xs: 3 }} container>
              <Grid mb={{ lg: 4.5, xs: 1.5 }} mt={{ lg: 11.75, xs: 3 }} item>
                <Typography color="brand.red" variant="h1">
                  Помочь politzek.org
                </Typography>
              </Grid>
              <Grid
                pl={{ lg: '101px', xs: 0 }}
                pr={{ lg: 4, xs: 0 }}
                width="100%"
                item
              >
                <Typography
                  lineHeight="32.74px"
                  margin="auto"
                  textAlign="left"
                  variant="subtitle1"
                >
                  Мы ежедневно обновляем информацию на этом сайте, а вы можете
                  найти политзаключенного, которому нужна помощь.
                  <br />
                  <br />
                  Но сейчас помощь нужна нам. Подпишитесь на регулярные
                  пожертвования или отправьте разовый донат, чтобы мы и дальше
                  могли делать свою работу.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* LG photo */}
          <Grid
            bgcolor="brand.green"
            display="flex"
            flexDirection="column"
            gap={10}
            justifyContent="center"
            lg={6}
            mt={{ lg: '-130px', xs: 0 }}
            position="relative"
            py={10}
            xs={12}
            item
          >
            <Box alignItems="center" display="flex" flexDirection="column">
              <Typography color="white" variant="h2">
                ₽
              </Typography>
              <Typography color="white" my={2} variant="caption">
                российский рубль
              </Typography>
              <Button
                component={Link}
                href="https://friendly2.me/support/avtozaklive/"
                variant="red"
              >
                ПОДДЕРЖАТЬ
              </Button>
            </Box>
            <Box alignItems="center" display="flex" flexDirection="column">
              <Typography color="white" variant="h2">
                €/$
              </Typography>
              <Typography color="white" my={2} variant="caption">
                иностранная валюта
              </Typography>
              <Button
                component={Link}
                href="https://avtozak.info/donate/"
                variant="red"
              >
                ПОДДЕРЖАТЬ
              </Button>
            </Box>
            <Box alignItems="center" display="flex" flexDirection="column">
              <Typography color="white" variant="h2">
                crypto
              </Typography>
              <Typography color="white" my={2} variant="caption">
                USDT/BTC/TON...
              </Typography>
              <Button
                component={Link}
                href="https://t.me/donat_avtozak"
                variant="red"
              >
                ПОДДЕРЖАТЬ
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageWithHeader>
  );
}
