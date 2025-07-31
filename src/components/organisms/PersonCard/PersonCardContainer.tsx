'use client';

import { styled } from '@mui/material';

const getBackground = (photoUrl: string, hasPicture: boolean) => {
  const baseGradient = hasPicture
    ? `linear-gradient(0deg, rgba(7, 71, 59, 0.30) 0%, rgba(7, 71, 59, 0.30) 100%),
       linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.67%, rgba(0, 0, 0, 0.60) 100%),
       url(${photoUrl}) no-repeat`
    : `url(${photoUrl}) no-repeat`;

  return `${baseGradient}, url(${photoUrl}) no-repeat`;
};

const getHoverBackground = (photoUrl: string, hasPicture: boolean) => {
  const baseGradient = hasPicture
    ? `linear-gradient(0deg, rgba(7, 71, 59, 0.50) 0%, rgba(7, 71, 59, 0.50) 100%),
       linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%),
       url(${photoUrl}) no-repeat`
    : `url(${photoUrl}) no-repeat`;
  return `${baseGradient}, url(${photoUrl}) no-repeat`;
};

type PersonCardContainerProps = {
  hasPicture: boolean;
  photoUrl: string;
};
export const PersonCardContainer = styled('div')<PersonCardContainerProps>(({
  hasPicture,
  photoUrl,
  theme,
}) => {
  const background = getBackground(photoUrl, hasPicture);
  const hoverBackground = getHoverBackground(photoUrl, hasPicture);

  return {
    alignItems: 'center',
    background,
    backgroundBlendMode: hasPicture ? 'normal' : 'multiply',
    backgroundColor: hasPicture ? 'transparent' : theme.palette.brand.green,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',

    '&:hover': {
      background: hoverBackground,
      backgroundBlendMode: hasPicture ? 'normal' : 'multiply',
      backgroundColor: hasPicture ? 'transparent' : theme.palette.brand.green,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      '.button': {
        opacity: 1,
      },
    },

    h2: {
      textTransform: 'uppercase',
    },
  };
});
