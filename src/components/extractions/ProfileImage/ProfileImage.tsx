'use client';

import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';

const DEFAULT_DIMENSIONS = 150;
const ERROR_IMAGE_SRC = '/error.avif';

export const ProfileImage: FC<ImageProps> = ({
  alt,
  height = DEFAULT_DIMENSIONS,
  src,
  width = DEFAULT_DIMENSIONS,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      alt={alt ?? 'profile-image'}
      height={height}
      onError={() => setHasError(true)}
      src={hasError || !src ? ERROR_IMAGE_SRC : src}
      width={width}
      {...rest}
    />
  );
};
