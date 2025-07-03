import { Link } from "wouter";
import { Heart, Home } from "lucide-react";

export default function Custom404() {
  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <Heart className="w-24 h-24 mx-auto text-romantic-red mb-4" />
          <h1 className="font-playfair text-6xl font-bold gold-gradient-text mb-4">404</h1>
          <h2 className="font-playfair text-3xl text-rose-gold mb-6">
            Oops, you're lost in love?
          </h2>
        </div>
        
        <p className="text-cream-soft text-lg mb-8 leading-relaxed">
          It seems like you've wandered into the wrong part of our love story. 
          Don't worry, even the best love stories have their plot twists!
        </p>
        
        <Link href="/">
          <button className="cta-solid px-8 py-4 rounded-full font-inter font-medium text-lg inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return to Our Story
          </button>
        </Link>
      </div>
    </div>
  );
}
