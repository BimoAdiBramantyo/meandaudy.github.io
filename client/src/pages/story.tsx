import { Link } from "wouter";
import { ArrowLeft, Clock, Heart } from "lucide-react";
import Navigation from "@/components/navigation";

export default function Story() {
  return (
    <div className="min-h-screen romantic-gradient">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/">
              <button className="text-cream-soft hover:text-rose-gold transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold gold-gradient-text">
              Our Love Story
            </h1>
          </div>

          <div className="text-center py-20">
            <div className="bg-black bg-opacity-30 rounded-3xl p-12 backdrop-blur-sm border border-rose-gold border-opacity-20 max-w-2xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-rose-gold bg-opacity-20 flex items-center justify-center">
                  <Clock className="w-12 h-12 text-rose-gold" />
                </div>
              </div>
              
              <h2 className="font-playfair text-4xl gold-gradient-text mb-6">
                Coming Soon
              </h2>
              
              <p className="text-cream-soft text-lg leading-relaxed mb-8">
                We're carefully crafting our beautiful love story to share with you. 
                Every chapter, every moment, every precious memory will be told with 
                the love and care it deserves.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-rose-gold">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Stay tuned for something magical</span>
                <Heart className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}