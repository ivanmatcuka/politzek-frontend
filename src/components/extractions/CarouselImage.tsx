'use client';

import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';

type ProfileImageProps = {
  onError?: () => void;
} & ImageProps;
export const ProfileImage: FC<ProfileImageProps> = ({
  alt = 'image',
  height,
  src = '',
  width,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      height={Number(height)}
      onError={() => setHasError(true)}
      src={hasError ? '/error.avif' : src}
      width={Number(width)}
    />
  );
};

type CarouselImageProps = {
  alt?: string;
  height?: number | `${number}` | undefined;
  src: string;
};
export const CarouselImage: FC<CarouselImageProps> = ({
  alt = 'image',
  height,
  src,
}) => {
  return <ProfileImage alt={alt} height={height} src={src} width={height} />;
};
