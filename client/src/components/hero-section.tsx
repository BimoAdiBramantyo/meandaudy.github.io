import { useConfetti } from "@/hooks/use-confetti";
import FloatingHearts from "./floating-hearts";

export default function HeroSection() {
  const triggerConfetti = useConfetti();

  const handleExploreStory = () => {
    const element = document.getElementById('story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    triggerConfetti();
  };

  const handleViewGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    triggerConfetti();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <FloatingHearts />
      
      <div className="text-center z-10 px-6 max-w-4xl">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold gold-gradient-text mb-6 leading-tight">
          For You, My Love
        </h1>
        <h2 className="font-playfair text-2xl md:text-3xl text-rose-gold mb-12 font-light">
          Every moment with you is magic ✨
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            className="cta-ghost px-8 py-4 rounded-full font-inter font-medium text-lg"
            onClick={handleExploreStory}
          >
            Explore Our Story
          </button>
          <button 
            className="cta-solid px-8 py-4 rounded-full font-inter font-medium text-lg"
            onClick={handleViewGallery}
          >
            Our Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
