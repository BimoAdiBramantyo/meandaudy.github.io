import { useState, useEffect } from "react";
import { Heart, Menu, X, Sparkles } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const activeSection = useScrollSpy(['hero', 'gallery', 'story', 'notes', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'story', label: 'Story' },
    { id: 'notes', label: 'Notes' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-md border-b border-rose-gold border-opacity-20 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="text-romantic-red text-2xl" />
              <span className="font-playfair text-2xl font-bold gold-gradient-text">L & A</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-rose-gold transition-colors ${
                    activeSection === item.id ? 'text-rose-gold' : 'text-cream-soft'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Sparkles className="text-champagne-gold text-lg sparkle cursor-pointer" />
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-champagne-gold" />
                ) : (
                  <Menu className="w-6 h-6 text-champagne-gold" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-playfair hover:text-rose-gold transition-colors text-cream-soft"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
