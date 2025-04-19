import { artwork } from '@/app/types/types';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

type ZoomableImageProps = {
  url: string;
  style?: React.CSSProperties;
  className?: string;
  artwork: artwork;
};

export const ZoomableImageComponent: React.FC<ZoomableImageProps> = ({
  url,
  style,
  className,
  artwork
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setIsZoomed(false);
    };
  
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
  
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      const root = document.getElementById('__next') || document.getElementById('root');
      if (root) root.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      const root = document.getElementById('__next') || document.getElementById('root');
      if (root) root.style.overflow = '';
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isZoomed]);
  

  const zoomedImage = (
  <div className='h-full w-full '>
    <div className="fixed inset-0 bg-black/50 z-[999998] flex flex-col items-center justify-center">
      <img
        src={url}
        alt="Zoomed"
        className="max-w-[75%] max-h-[75%] z-[999999] cursor-zoom-out"
      />
      <div className="mt-4 text-black text-left z-[999999]">
        <p className="italic">{`${artwork.name} (${artwork.year})`}</p>
        <p>{artwork.type}</p>
        <p>{artwork.dimensions}</p>
      </div>
    </div>
  </div>
  );

  return (
    <div className={className}>
      <div className="flex items-center justify-center w-full h-full">
        <button
          onClick={handleImageClick}
          className="bg-transparent border-none p-0"
        >
          <img
            ref={imageRef}
            src={url}
            alt="Thumbnail"
            className={`max-w-full max-h-full rounded cursor-zoom-in transition-transform duration-300 ${
              isZoomed ? 'z-[999999]' : 'z-[1]'
            }`}
            style={style}
          />
        </button>
      </div>
      {isZoomed && ReactDOM.createPortal(zoomedImage, document.body)}
    </div>
  );
};
