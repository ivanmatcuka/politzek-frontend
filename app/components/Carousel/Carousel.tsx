'use client';

import { styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Slider, { Settings } from 'react-slick';

const Container = styled('div')({
  position: 'absolute',

  left: 0,
  right: 0,
});
const defaultSettings: Settings = {
  swipeToSlide: true,
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  variableWidth: true,
};

export const Carousel: FC<PropsWithChildren & { settings?: Settings }> = ({
  children,
  settings = {},
}) => {
  const merged = { ...defaultSettings, ...settings };

  return (
    <Container>
      <Slider {...merged}>{children}</Slider>
    </Container>
  );
};
