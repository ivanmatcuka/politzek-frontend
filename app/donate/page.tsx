import { Box, Grid } from '@mui/material';

import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';

export default function Donate() {
  return (
    <Box
      width="100%"
      boxSizing="border-box"
      pt={{ xs: 0, sm: 0, lg: 0 }}
      sx={{ overflowX: 'clip' }}
    >
      <Grid
        container
        maxWidth={1200}
        margin="auto"
        justifyContent={{ xs: 'center', lg: 'space-between' }}
      >
        <Grid item flex={1} xs={12} lg={6}>
          <Grid container mb={{ xs: 3, lg: 11 }}>
            <Grid item mt={{ xs: 3, lg: 11.75 }} mb={{ xs: 1.5, lg: 4.5 }}>
              <Typography variant="h1" color="brand.red">
                Помочь politzek.org
              </Typography>
            </Grid>
            <Grid
              item
              width="100%"
              pl={{ xs: 0, lg: '101px' }}
              pr={{ xs: 0, lg: 4 }}
            >
              <Typography
                variant="subtitle1"
                textAlign="left"
                lineHeight="32.74px"
                margin="auto"
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
          item
          lg={6}
          xs={12}
          display="flex"
          flexDirection="column"
          position="relative"
          justifyContent="center"
          mt={{ lg: '-130px', xs: 0 }}
          bgcolor="brand.green"
          gap={10}
          py={10}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h2" color="white">
              ₽
            </Typography>
            <Typography variant="caption" color="white" my={2}>
              российский рубль
            </Typography>
            <Button variant="red" href="#">
              ПОДДЕРЖАТЬ
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h2" color="white">
              €/$
            </Typography>
            <Typography variant="caption" color="white" my={2}>
              иностранная валюта
            </Typography>
            <Button variant="red" href="#">
              ПОДДЕРЖАТЬ
            </Button>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h2" color="white">
              crypto
            </Typography>
            <Typography variant="caption" color="white" my={2}>
              USDT/BTC/TON...
            </Typography>
            <Button variant="red" href="#">
              ПОДДЕРЖАТЬ
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
