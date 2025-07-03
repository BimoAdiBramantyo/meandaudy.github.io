import { useState, useEffect } from "react";
import { Play, Pause, Volume2, X } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(35);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const closePlayer = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 0.5;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md border-t border-rose-gold border-opacity-20 p-4 z-40">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlayPause}
              className="text-champagne-gold hover:text-rose-gold transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
            <div>
              <p className="text-cream-soft font-inter text-sm">Our Song</p>
              <p className="text-rose-gold font-inter text-xs">Perfect by Ed Sheeran</p>
            </div>
          </div>
          
          <div className="flex-1 mx-8 hidden md:block">
            <div className="audio-progress">
              <div 
                className="audio-progress-bar" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-champagne-gold hover:text-rose-gold transition-colors">
              <Volume2 className="w-4 h-4" />
            </button>
            <button 
              onClick={closePlayer}
              className="text-champagne-gold hover:text-rose-gold transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
