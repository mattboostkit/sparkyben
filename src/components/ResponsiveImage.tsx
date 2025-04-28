import React from 'react';
import { ResponsiveImageProps } from '../types';

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  srcSet,
  sizes,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy'
}) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
    />
  );
};

export default ResponsiveImage;