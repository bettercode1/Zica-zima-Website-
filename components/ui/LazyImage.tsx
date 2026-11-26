'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { logger } from '@/lib/logger';

interface LazyImageProps extends ImageProps {
  containerClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  containerClassName = '',
  className = '',
  ...props
}) => {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      {!error ? (
        <Image
          src={src}
          alt={alt}
          {...props}
          className={className}
          onLoad={(event) => {
            if (props.onLoad) (props.onLoad as (e: React.SyntheticEvent<HTMLImageElement>) => void)(event);
          }}
          onError={(event) => {
            logger.error(`Image load error: ${src}`);
            setError(true);
            if (props.onError) (props.onError as (e: React.SyntheticEvent<HTMLImageElement>) => void)(event);
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/10">
          <span className="material-symbols-outlined text-white/20 text-4xl">image_not_supported</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
