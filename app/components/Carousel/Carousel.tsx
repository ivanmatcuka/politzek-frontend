'use client';

import { styled } from '@mui/material';
import {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Slider, { Settings } from 'react-slick';

const DOT_WIDTH = 30;

type SliderListProps = {
  translateOffset: number;
};
const SliderList = styled('ul')<SliderListProps>(({ translateOffset }) => ({
  display: 'flex',
  padding: 0,
  transform: `translateX(${translateOffset}px)`,
  transition: 'transform 0.3s ease',
  listStyle: 'none',
}));

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
  adaptiveHeight: true,
};

export const Carousel: FC<PropsWithChildren & { settings?: Settings }> = ({
  children,
  settings = {},
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const merged = { ...defaultSettings, ...settings };

  const appendDots = useCallback(
    (dots: ReactNode) => {
      const offset = (currentSlide + 1) * DOT_WIDTH;
      const width = screenWidth / 2;
      const translate = Math.min(0, width - offset + DOT_WIDTH / 2);

      return <SliderList translateOffset={translate}>{dots}</SliderList>;
    },
    [currentSlide, screenWidth],
  );

  useEffect(() => {
    const handleResize = () =>
      setScreenWidth(sliderRef.current?.innerSlider?.list?.clientWidth ?? 0);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Slider
      {...merged}
      ref={sliderRef}
      appendDots={appendDots}
      beforeChange={(_, next) => setCurrentSlide(next)}
    >
      {children}
    </Slider>
  );
};
