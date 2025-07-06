import { useState, useEffect } from "react";
import { Heart, Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [location] = useLocation();

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

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/story', label: 'Story' },
    { path: '/notes', label: 'Notes' }
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
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Heart className="text-romantic-red text-2xl" />
                <span className="font-playfair text-2xl font-bold gold-gradient-text">A & B</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <button
                    className={`hover:text-rose-gold transition-colors ${
                      location === item.path ? 'text-rose-gold' : 'text-cream-soft'
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
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
              <Link key={item.path} href={item.path}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-playfair hover:text-rose-gold transition-colors text-cream-soft"
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
