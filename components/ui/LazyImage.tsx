'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image';

interface LazyImageProps extends ImageProps {
  containerClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  containerClassName = "", 
  className = "",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Robust check for cached images and safety timeout
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
      return;
    }

    // Safety timeout to ensure image eventually shows up even if onLoad fails
    const timer = setTimeout(() => {
      if (!isLoaded) setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  // If it's a priority image, we should ideally show it faster
  const displayLoaded = props.priority || isLoaded;

  return (
    <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
      {/* 
        NOTE: We don't need a custom placeholder here because the parent components 
        (like CourseCardVisual) already provide a beautiful generative design as a fallback.
      */}
      
      {!error ? (
        <Image
          ref={imgRef}
          src={src}
          alt={alt}
          {...props}
          className={`transition-all duration-700 ease-out ${
            displayLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md'
          } ${className}`}
          onLoad={(e) => {
            setIsLoaded(true);
            if (props.onLoad) (props.onLoad as any)(e);
          }}
          onError={(e) => {
            console.error(`Image load error: ${src}`);
            setError(true);
            if (props.onError) (props.onError as any)(e);
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/10 backdrop-blur-sm">
          <span className="material-symbols-outlined text-white/20 text-4xl">image_not_supported</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
