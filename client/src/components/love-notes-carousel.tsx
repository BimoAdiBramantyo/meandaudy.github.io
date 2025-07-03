import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function LoveNotesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const loveNotes = [
    {
      title: "Morning Sunshine",
      date: "January 14, 2023",
      content: "Good morning, my love. Waking up next to you is the best part of every day. Your smile is my sunshine, and your laughter is my favorite melody. Thank you for being the most amazing person in my life.",
      author: "Your Sleepy Partner ❤️"
    },
    {
      title: "Anniversary Love",
      date: "March 15, 2023",
      content: "Three years ago, we met by chance. Today, I know it was destiny. Every day with you feels like a celebration of love. Here's to many more years of adventures, laughter, and endless love.",
      author: "Your Forever Love 💕"
    },
    {
      title: "Random Tuesday",
      date: "August 8, 2023",
      content: "Just wanted to remind you on this random Tuesday that you're incredible. The way you care for others, your beautiful soul, and your amazing heart make me fall in love with you over and over again.",
      author: "Your Biggest Fan 🌟"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % loveNotes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + loveNotes.length) % loveNotes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="notes" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-playfair text-4xl md:text-5xl text-center gold-gradient-text mb-16">
          Love Notes
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="carousel-track flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {loveNotes.map((note, index) => (
                <div key={index} className="carousel-slide">
                  <div className="bg-black bg-opacity-30 rounded-3xl p-8 backdrop-blur-sm border border-rose-gold border-opacity-20 text-center">
                    <div className="flex justify-center mb-6">
                      <Heart className="text-romantic-red text-4xl" />
                    </div>
                    <h3 className="font-playfair text-2xl gold-gradient-text mb-4">
                      {note.title}
                    </h3>
                    <p className="text-rose-gold mb-4 font-inter">
                      {note.date}
                    </p>
                    <p className="text-cream-soft text-lg leading-relaxed italic mb-6">
                      "{note.content}"
                    </p>
                    <p className="text-rose-gold font-inter">
                      - {note.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-champagne-gold bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 transition-all duration-300"
          >
            <ChevronLeft className="text-champagne-gold" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-champagne-gold bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 transition-all duration-300"
          >
            <ChevronRight className="text-champagne-gold" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {loveNotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-champagne-gold' 
                    : 'bg-champagne-gold bg-opacity-40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
