import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import GalleryGrid from "@/components/gallery-grid";
import LoveStory from "@/components/love-story";
import LoveNotesCarousel from "@/components/love-notes-carousel";
import ContactForm from "@/components/contact-form";
import AudioPlayer from "@/components/audio-player";
import EasterEggModal from "@/components/easter-egg-modal";

export default function Home() {
  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen romantic-gradient">
      <Navigation />
      <HeroSection />
      <GalleryGrid />
      <LoveStory />
      <LoveNotesCarousel />
      <ContactForm />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-rose-gold border-opacity-20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-cream-soft font-inter text-sm">
                Made with ❤️ by <span className="text-rose-gold">Love & Affection</span> – 2025
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-cream-soft hover:text-rose-gold transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-cream-soft hover:text-rose-gold transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-cream-soft hover:text-rose-gold transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="/404" className="text-cream-soft hover:text-rose-gold transition-colors text-sm">
                Oops, you're lost in love?
              </a>
            </div>
          </div>
        </div>
      </footer>

      <AudioPlayer />
      <EasterEggModal />
    </div>
  );
}
