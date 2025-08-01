'use client';

import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';

const DEFAULT_DIMENSIONS = 150;

export const CarouselImage: FC<ImageProps> = ({
  alt = 'carousel-image',
  height,
  src,
  width,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      height={height ?? DEFAULT_DIMENSIONS}
      onError={() => setHasError(true)}
      src={hasError ? '/error.avif' : src}
      width={width ?? DEFAULT_DIMENSIONS}
    />
  );
};
