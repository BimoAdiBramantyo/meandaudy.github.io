import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download, Heart } from "lucide-react";

interface LightboxProps {
  images: Array<{
    id: number;
    url: string;
    alt: string;
    title: string;
    description: string;
  }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ images, currentIndex, isOpen, onClose }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  if (!isOpen) return null;

  const currentImage = images[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = currentImage.url;
    link.download = `love-gallery-${currentImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    link.click();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div 
        className="relative max-w-4xl w-full max-h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h3 className="font-playfair text-2xl gold-gradient-text">
              {currentImage.title}
            </h3>
            <span className="text-cream-soft text-sm">
              {activeIndex + 1} of {images.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={downloadImage}
              className="text-cream-soft hover:text-rose-gold transition-colors p-2"
              title="Download image"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="text-cream-soft hover:text-rose-gold transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src={currentImage.url}
            alt={currentImage.alt}
            className="max-w-full max-h-[70vh] object-contain rounded-2xl"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all duration-300"
          >
            <ChevronLeft className="text-cream-soft w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all duration-300"
          >
            <ChevronRight className="text-cream-soft w-6 h-6" />
          </button>
        </div>

        {/* Image Description */}
        <div className="mt-4 text-center">
          <p className="text-cream-soft leading-relaxed mb-4">
            {currentImage.description}
          </p>
          
          {/* Image Thumbnails */}
          <div className="flex justify-center gap-2 overflow-x-auto py-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === activeIndex 
                    ? 'border-rose-gold' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Love Button */}
        <div className="mt-4 text-center">
          <button className="text-romantic-red hover:scale-110 transition-transform duration-300">
            <Heart className="w-8 h-8 fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
}