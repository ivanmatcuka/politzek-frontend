'use client';

import { styled } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const Container = styled('div')(() => ({
  boxSizing: 'border-box',

  maxWidth: 594,
  minHeight: 285,
  position: 'relative',
}));

const ActionContainer = styled('div')({
  bottom: 5,
  position: 'absolute',
  right: 0,
});

const Title = styled(Typography)({
  transform: 'rotate(-2.47deg)',
});

const StyledImage = styled(Image)(({ theme }) => ({
  left: 0,
  position: 'absolute',
  top: 150,

  [theme.breakpoints.down('lg')]: {
    height: 90,
    width: 100,
  },
}));

const Background = styled('img')({
  height: '100%',
  inset: 0,
  position: 'absolute',

  width: '100%',
  zIndex: -1,
});

type CardProps = {
  action?: ReactNode;
  body: ReactNode;

  catPictureUrl?: string;
  title: ReactNode;
};
export const Card: FC<CardProps> = ({ action, body, catPictureUrl, title }) => {
  return (
    <Container>
      <Title component="p" variant="h2">
        {title}
      </Title>
      <Typography
        component="p"
        pb={{ xs: 9 }}
        pl={{ lg: 17.5, xs: 12.5 }}
        pr={1.5}
        pt={1.5}
        variant="p2"
      >
        {body}
      </Typography>
      {action && <ActionContainer>{action}</ActionContainer>}
      <Background src="/images/frames/frame_tilted.png" />
      {catPictureUrl && (
        <StyledImage
          alt="icon_letter"
          height={121}
          src={catPictureUrl}
          width={135}
        />
      )}
    </Container>
  );
};
