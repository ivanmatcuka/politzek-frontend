'use client';

import { Typography, styled } from '@mui/material';
import { DetailedHTMLProps, FC, ImgHTMLAttributes, useState } from 'react';

export const ProfileImageContainer = styled('div')(({ theme }) => ({
  filter: 'drop-shadow(4px 4px 0px #000000)',
  position: 'absolute',

  zIndex: 100,

  [theme.breakpoints.down('lg')]: {
    position: 'static',
  },
}));

export const EmptyProfileImageContainer = styled(ProfileImageContainer)({
  filter: 'none',
});

const StyledImage = styled('img')(({ theme }) => ({
  clipPath: 'polygon(98% 0, 100% 74%, 96% 100%, 0 97%, 4% 0)',

  objectFit: 'cover',

  [theme.breakpoints.down('lg')]: {
    height: 188,
    width: 184,
  },
}));

type ProfileImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export const ProfileImage: FC<ProfileImageProps> = (props) => {
  const [hasError, setHasError] = useState(false);

  return (
    <StyledImage
      {...props}
      onError={() => setHasError(true)}
      src={hasError ? '/error.avif' : props.src}
    />
  );
};

export const EmptyProfileImage = styled(ProfileImage)({
  clipPath: 'none',
});

export const DescriptionLayout = styled(Typography)({
  p: {
    '&:first-of-type': {
      marginTop: 0,
    },
    '&:last-of-type': {
      marginBottom: 0,
    },
  },
});
