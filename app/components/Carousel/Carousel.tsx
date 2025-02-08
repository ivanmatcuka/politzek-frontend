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
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
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
