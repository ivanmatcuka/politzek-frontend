'use client';

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
      const offset = (currentSlide + 1) * 30;
      const width = screenWidth / 2;
      const translate = Math.min(0, width - offset);

      return (
        <ul
          style={{
            position: 'static',
            display: 'flex',
            flexWrap: 'nowrap',
            transform: `translateX(${translate}px)`,
            transition: 'transform 0.3s ease',
          }}
        >
          {dots}
        </ul>
      );
    },
    [currentSlide, screenWidth],
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
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
