'use client';

import Image, { ImageProps } from 'next/image';
import { FC, useState } from 'react';

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
      height={Number(height)}
      onError={() => setHasError(true)}
      src={hasError ? '/error.avif' : src}
      width={Number(width)}
    />
  );
};
