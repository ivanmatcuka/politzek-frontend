'use client';

import { styled } from '@mui/material';
import { DetailedHTMLProps, FC, ImgHTMLAttributes, useState } from 'react';

const StyledImage = styled('img')({
  marginRight: 10,
});

type ProfileImageProps = {
  onError?: () => void;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
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

type CarouselImageProps = {
  alt?: string;
  height?: number | `${number}` | undefined;
  src: string;
};
export const CarouselImage: FC<CarouselImageProps> = ({ alt, height, src }) => {
  return <ProfileImage alt={alt} height={height} src={src} />;
};
