'use client';

import { Grid, styled } from '@mui/material';
import Image from 'next/image';

import { Button } from '@/components/atoms/Button/Button';
import { Typography } from '@/components/typography/Typography/Typography';

import { DrawingFrame } from '../DrawingFrame/DrawingFrame';

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.brand.green,
}));

const StyledTypography = styled(Typography)(() => ({
  width: '100%',
}));

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.brand.white,
}));

export const Footer = () => (
  <Grid
    width="100%"
    flexDirection="column"
    justifyContent="center"
    id="footer"
    flexWrap="nowrap"
    container
    style={{ overflowX: 'clip' }}
  >
    <Grid item flex={1}>
      <Grid
        container
        maxWidth={1200}
        width="100%"
        flexDirection="column"
        margin="auto"
        className="footer"
        py={{ xs: 6, lg: 10.75 }}
        px={2}
      >
        <Grid alignSelf="flex-start" item>
          <Typography variant="h1" color="brand.yellow">
            Помочь нашему
            <br />
            проекту
          </Typography>
        </Grid>
        <Grid
          item
          pt={{ xs: 2, sm: 8, lg: 2 }}
          my={8}
          maxWidth={{ xs: '100%', lg: '594px' }}
          alignSelf="center"
        >
          <Typography variant="subtitle1" textAlign="center">
            Над большой базой данных работает целая команда. Помогите нам
            продолжать и развивать этот проект.
          </Typography>
        </Grid>
        <DrawingFrame
          maxWidth={{ xs: '380px', lg: '796px' }}
          width="100%"
          p={3}
          pb={4}
          alignSelf="center"
          item
        >
          <Grid container>
            <Grid item flexBasis="100%">
              <Typography variant="subtitle1" textAlign="center" width="100%">
                Вы можете поддержать нас через Boosty или Patreon:
              </Typography>
            </Grid>
            <Grid
              flexBasis={{ xs: '100%', lg: '50%' }}
              alignSelf="end"
              textAlign="center"
            >
              <Image
                alt="boosty"
                src="/boosty.png"
                width={181}
                height={57}
                className="footer__image"
              />
              <div>
                <a href="https://boosty.to/avtozaklive" target="_blank">
                  <Button>Поддержать</Button>
                </a>
              </div>
            </Grid>
            <Grid
              flexBasis={{ xs: '100%', lg: '50%' }}
              alignSelf="end"
              textAlign="center"
            >
              <Image
                alt="patreon"
                src="/patreon.png"
                width={208}
                height={71}
                className="footer__image"
              />
              <div>
                <a href="https://www.patreon.com/avtozak" target="_blank">
                  <Button>Поддержать</Button>
                </a>
              </div>
            </Grid>
          </Grid>
        </DrawingFrame>
      </Grid>
    </Grid>
    <StyledGrid flex={1} item py={6} px={{ xs: 2, lg: 6 }}>
      <StyledTypography variant="p3" component="p" width={1200} color="white">
        Дизайн сайта разработан студией{' '}
        <StyledLink href="https://neimark-art.ru" target="_blank">
          Neklistic
        </StyledLink>
      </StyledTypography>
      <StyledTypography variant="p3" component="p" width={1200} color="white">
        Спецпроект{' '}
        <StyledLink href="https://t.me/avtozaklive" target="_blank">
          Avtozak LIVE
        </StyledLink>
      </StyledTypography>
    </StyledGrid>
  </Grid>
);
