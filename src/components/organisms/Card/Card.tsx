'use client';

import { styled } from '@mui/material';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { Typography } from '../../../components/typography/Typography/Typography';

const Container = styled('div')(() => ({
  position: 'relative',

  maxWidth: 594,
  minHeight: 285,
  boxSizing: 'border-box',
}));

const ActionContainer = styled('div')({
  position: 'absolute',
  right: 0,
  bottom: 5,
});

const Title = styled(Typography)({
  transform: 'rotate(-2.47deg)',
});

const StyledImage = styled(Image)(({ theme }) => ({
  position: 'absolute',
  top: 150,
  left: 0,

  [theme.breakpoints.down('lg')]: {
    width: 100,
    height: 90,
  },
}));

const Background = styled('img')({
  position: 'absolute',
  inset: 0,
  zIndex: -1,

  width: '100%',
  height: '100%',
});

type CardProps = {
  title: ReactNode;
  body: ReactNode;

  action?: ReactNode;
  catPictureUrl?: string;
};
export const Card: FC<CardProps> = ({ title, body, action, catPictureUrl }) => {
  return (
    <Container>
      <Title variant="h2" component="p">
        {title}
      </Title>
      <Typography
        variant="p2"
        component="p"
        pt={1.5}
        pr={1.5}
        pl={{ xs: 12.5, lg: 17.5 }}
        pb={{ xs: 9 }}
      >
        {body}
      </Typography>
      {action && <ActionContainer>{action}</ActionContainer>}
      <Background src="/images/frames/frame_tilted.png" />
      {catPictureUrl && (
        <StyledImage
          alt="icon_letter"
          width={135}
          height={121}
          src={catPictureUrl}
        />
      )}
    </Container>
  );
};
