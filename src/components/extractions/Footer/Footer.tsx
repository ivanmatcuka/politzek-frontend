'use client';

import { Grid, styled } from '@mui/material';
import Image from 'next/image';

import { Button } from '~/components/atoms/Button/Button';
import { Typography } from '~/components/typography/Typography/Typography';

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
    flexDirection="column"
    flexWrap="nowrap"
    id="footer"
    justifyContent="center"
    style={{ overflowX: 'clip' }}
    width="100%"
    container
  >
    <Grid flex={1} item>
      <Grid
        className="footer"
        flexDirection="column"
        margin="auto"
        maxWidth={1200}
        px={2}
        py={{ lg: 10.75, xs: 6 }}
        width="100%"
        container
      >
        <Grid alignSelf="flex-start" item>
          <Typography color="brand.yellow" variant="h1">
            Помочь нашему
            <br />
            проекту
          </Typography>
        </Grid>
        <Grid
          alignSelf="center"
          maxWidth={{ lg: '594px', xs: '100%' }}
          my={8}
          pt={{ lg: 2, sm: 8, xs: 2 }}
          item
        >
          <Typography textAlign="center" variant="subtitle1">
            Над большой базой данных работает целая команда. Помогите нам
            продолжать и развивать этот проект.
          </Typography>
        </Grid>
        <DrawingFrame
          alignSelf="center"
          maxWidth={{ lg: '796px', xs: '380px' }}
          p={3}
          pb={4}
          width="100%"
          item
        >
          <Grid container>
            <Grid flexBasis="100%" item>
              <Typography textAlign="center" variant="subtitle1" width="100%">
                Вы можете поддержать нас через Boosty или Patreon:
              </Typography>
            </Grid>
            <Grid
              alignSelf="end"
              flexBasis={{ lg: '50%', xs: '100%' }}
              textAlign="center"
            >
              <Image
                alt="boosty"
                className="footer__image"
                height={57}
                src="/boosty.png"
                width={181}
              />
              <div>
                <a href="https://boosty.to/avtozaklive" target="_blank">
                  <Button>Поддержать</Button>
                </a>
              </div>
            </Grid>
            <Grid
              alignSelf="end"
              flexBasis={{ lg: '50%', xs: '100%' }}
              textAlign="center"
            >
              <Image
                alt="patreon"
                className="footer__image"
                height={71}
                src="/patreon.png"
                width={208}
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
    <StyledGrid flex={1} px={{ lg: 6, xs: 2 }} py={6} item>
      <StyledTypography color="white" component="p" variant="p3" width={1200}>
        Дизайн сайта разработан студией{' '}
        <StyledLink href="https://neimark-art.ru" target="_blank">
          Neklistic
        </StyledLink>
      </StyledTypography>
      <StyledTypography color="white" component="p" variant="p3" width={1200}>
        Спецпроект{' '}
        <StyledLink href="https://t.me/avtozaklive" target="_blank">
          Avtozak LIVE
        </StyledLink>
      </StyledTypography>
    </StyledGrid>
  </Grid>
);
