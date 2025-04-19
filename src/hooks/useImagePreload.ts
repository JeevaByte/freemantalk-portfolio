import { useEffect, useState } from 'react';

interface UseImagePreloadProps {
  src: string;
  fallbackSrc?: string;
  onError?: () => void;
}

export const useImagePreload = ({ src, fallbackSrc, onError }: UseImagePreloadProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    const img = new Image();
    
    const handleLoad = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleError = () => {
      setIsLoading(false);
      setError(new Error('Failed to load image'));
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      }
      onError?.();
    };

    img.src = src;
    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc, onError]);

  return {
    isLoading,
    error,
    src: imageSrc,
  };
}; 