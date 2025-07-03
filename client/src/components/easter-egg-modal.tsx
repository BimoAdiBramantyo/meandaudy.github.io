import { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";
import { useConfetti } from "@/hooks/use-confetti";

export default function EasterEggModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const triggerConfetti = useConfetti();

  useEffect(() => {
    const handleSparkleClick = () => {
      setClickCount(prev => prev + 1);
      
      if (clickCount >= 4) {
        setIsOpen(true);
        setClickCount(0);
        triggerConfetti();
      }
    };

    // Add event listener to sparkle elements
    const sparkleElements = document.querySelectorAll('.sparkle');
    sparkleElements.forEach(el => {
      el.addEventListener('click', handleSparkleClick);
    });

    return () => {
      sparkleElements.forEach(el => {
        el.removeEventListener('click', handleSparkleClick);
      });
    };
  }, [clickCount, triggerConfetti]);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div 
        className="bg-black bg-opacity-90 rounded-3xl p-8 max-w-md mx-4 text-center border border-rose-gold border-opacity-30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-cream-soft hover:text-rose-gold transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="mb-6">
          <Heart className="text-romantic-red text-6xl animate-pulse mx-auto" />
        </div>
        
        <h3 className="font-playfair text-3xl gold-gradient-text mb-4">
          You Found Our Secret!
        </h3>
        
        <p className="text-cream-soft mb-6 leading-relaxed">
          Just like you found this hidden message, I found you in this big world. 
          Thank you for being my greatest treasure.
        </p>
        
        <img
          src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
          alt="Romantic couple silhouette at sunset"
          className="w-full h-48 object-cover rounded-2xl mb-6"
          loading="lazy"
        />
        
        <button
          onClick={closeModal}
          className="cta-solid px-6 py-3 rounded-full font-inter"
        >
          Close
        </button>
      </div>
    </div>
  );
}
