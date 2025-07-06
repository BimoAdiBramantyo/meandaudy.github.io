import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Search, Filter, Grid, List, Heart } from "lucide-react";
import Navigation from "@/components/navigation";
import ImageLightbox from "@/components/image-lightbox";

// Import the real photos from assets
import img1 from "@/assets/images/IMG-20241230-WA0105.jpg";
import img2 from "@/assets/images/IMG-20241230-WA0107.jpg";
import img3 from "@/assets/images/IMG-20250316-WA0045.jpg";
import img4 from "@/assets/images/IMG-20250316-WA0051.jpg";
import img5 from "@/assets/images/IMG-20250316-WA0060.jpg";
import img6 from "@/assets/images/IMG-20250316-WA0068.jpg";
import img7 from "@/assets/images/IMG-20250420-WA0018.jpg";
import img8 from "@/assets/images/IMG-20250511-WA0040.jpg";
import img9 from "@/assets/images/IMG-20250511-WA0054.jpg";
import img10 from "@/assets/images/IMG-20250520-WA0030.jpg";
import img11 from "@/assets/images/IMG_20250411_190318.jpg";
import img12 from "@/assets/images/IMG_20250411_232523.jpg";
import img13 from "@/assets/images/IMG_20250413_163040.jpg";
import img14 from "@/assets/images/IMG_20250419_181202.jpg";
import img15 from "@/assets/images/IMG_20250511_173914.jpg";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      url: img1,
      alt: "Beautiful moment together",
      title: "Sweet Memories",
      description: "One of our favorite moments captured",
      category: "special-moments",
      tags: [
        "hugging pose by mirror",
        "Cozy Vibes",
        "Just Us"
      ]
    },
    {
      id: 2,
      url: img2,
      alt: "Happy times together",
      title: "Joyful Days",
      description: "Sharing laughter and love",
      category: "daily-life",
      tags: [
        "holding phones together",
        "Candid Love",
        "Mirror Shot"
      ]
    },
    {
      id: 3,
      url: img3,
      alt: "Romantic moment",
      title: "Perfect Together",
      description: "A moment of pure happiness",
      category: "special-moments",
      tags: [
        "hugging in front of “The Love Dept.”",
        "Matching Outfits",
        "Love Goals"
      ]
    },
    {
      id: 4,
      url: img4,
      alt: "Beautiful smile",
      title: "Your Beautiful Smile",
      description: "The smile that melts my heart",
      category: "daily-life",
      tags: [
        "OOTD",
        "Silly Times",
        "Mall Date"
      ]
    },
    {
      id: 5,
      url: img5,
      alt: "Adventure time",
      title: "Our Adventure",
      description: "Exploring the world together",
      category: "adventures",
      tags: [
        "white outfit, shop background",
        "OOTD",
        "City Vibes"
      ]
    },
    {
      id: 6,
      url: img6,
      alt: "Cozy moment",
      title: "Cozy Times",
      description: "Quiet moments that mean everything",
      category: "daily-life",
      tags: [
        "black & white photobooth stickers",
        "Photo Booth",
        "Playful Memories"
      ]
    },
    {
      id: 7,
      url: img7,
      alt: "Celebration time",
      title: "Celebrating Love",
      description: "Special occasions made even more special",
      category: "celebrations",
      tags: [
        "bouquet + graduation-style",
        "Graduation Day",
        "Achievements"
      ]
    },
    {
      id: 8,
      url: img8,
      alt: "Fun together",
      title: "Fun Times",
      description: "Every day is an adventure with you",
      category: "adventures",
      tags: [
        "selfie in car",
        "Glam Time",
        "On The Way"
      ]
    },
    {
      id: 9,
      url: img9,
      alt: "Romantic date",
      title: "Date Night",
      description: "Our favorite way to spend time together",
      category: "dates",
      tags: [
        "with parents at night",
        "Family Moments",
        "Dinner Night"
      ]
    },
    {
      id: 10,
      url: img10,
      alt: "Beautiful day",
      title: "Beautiful Day",
      description: "Making every day count",
      category: "daily-life",
      tags: [
        "helmet with dog filter",
        "Silly Fun",
        "On The Go"
      ]
    },
    {
      id: 11,
      url: img11,
      alt: "Evening together",
      title: "Evening Bliss",
      description: "Perfect evenings with you",
      category: "special-moments",
      tags: [
        "working on calligraphy/art",
        "Focused Time",
        "Creative Vibes"
      ]
    },
    {
      id: 12,
      url: img12,
      alt: "Late night moments",
      title: "Late Night Love",
      description: "Those precious late-night conversations",
      category: "special-moments",
      tags: [
        "eating on the floor",
        "Midnight Snack",
        "Cozy Chaos"
      ]
    },
    {
      id: 13,
      url: img13,
      alt: "Afternoon delight",
      title: "Afternoon Together",
      description: "Lazy afternoons are the best with you",
      category: "daily-life",
      tags: [
        "iPad drawing with crown and tears",
        "Goofy Moments",
        "Digital Fun"
      ]
    },
    {
      id: 14,
      url: img14,
      alt: "Spring moments",
      title: "Spring Love",
      description: "Love blooming like spring flowers",
      category: "adventures",
      tags: [
        "playing billiards",
        "Game Night",
        "Chill Vibes"
      ]
    },
    {
      id: 15,
      url: img15,
      alt: "Perfect evening",
      title: "Perfect Evening",
      description: "Every evening is perfect with you",
      category: "dates",
      tags: [
        "mirror selfie with mom in restaurant",
        "Family Time",
        "Mirror Moments"
      ]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'special-moments', label: 'Special Moments' },
    { value: 'daily-life', label: 'Daily Life' },
    { value: 'celebrations', label: 'Celebrations' },
    { value: 'dates', label: 'Dates' },
    { value: 'adventures', label: 'Adventures' }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen romantic-gradient">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <button className="text-cream-soft hover:text-rose-gold transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold gold-gradient-text">
              Our Gallery
            </h1>
          </div>

          <p className="text-cream-soft text-lg mb-8 max-w-2xl">
            A collection of our most precious moments together. Each photo tells a story of love, laughter, and the beautiful journey we've shared.
          </p>

          {/* Search and Filter Bar */}
          <div className="bg-black bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm border border-rose-gold border-opacity-20 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cream-soft w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search memories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-50 border border-rose-gold border-opacity-30 rounded-xl text-cream-soft placeholder-gray-400 focus:border-champagne-gold focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="text-cream-soft w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-black bg-opacity-50 border border-rose-gold border-opacity-30 rounded-xl text-cream-soft px-4 py-3 focus:border-champagne-gold focus:outline-none transition-all duration-300"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value} className="bg-black">
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-rose-gold text-black' : 'text-cream-soft hover:text-rose-gold'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-rose-gold text-black' : 'text-cream-soft hover:text-rose-gold'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-cream-soft text-sm">
              Showing {filteredImages.length} of {galleryImages.length} photos
            </p>
          </div>

          {/* Gallery Grid/List */}
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-6"
          }>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`bg-black bg-opacity-30 rounded-3xl overflow-hidden hover-lift backdrop-blur-sm border border-rose-gold border-opacity-20 cursor-pointer ${
                  viewMode === 'list' ? 'flex gap-6 p-6' : ''
                }`}
                onClick={() => openLightbox(galleryImages.findIndex(img => img.id === image.id))}
              >
                <div className="relative">
                  {/* Favorite badge for first three images */}
                  {image.id <= 3 && (
                    <span className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-[#F7CAC9] text-[#7A2D2D] px-3 py-1 rounded-full text-xs font-semibold shadow">
                      <Heart className="w-4 h-4 text-[#7A2D2D] fill-[#F7CAC9]" />
                      Favorite
                    </span>
                  )}
                  <img
                    src={image.url}
                    alt={image.alt}
                    className={
                      viewMode === 'grid' 
                        ? "w-full h-64 object-cover" 
                        : "w-48 h-32 object-cover rounded-2xl flex-shrink-0"
                    }
                    loading="lazy"
                  />
                </div>
                <div className={viewMode === 'grid' ? "p-6" : "flex-1"}>
                  <div className="flex items-center gap-2 mb-2">
                    {/* Removed image title */}
                    <span className="text-xs bg-[#F7CAC9] text-[#7A2D2D] px-2 py-1 rounded-full font-semibold cursor-pointer"
                      onClick={e => {
                        e.stopPropagation();
                        setSelectedCategory(image.category);
                      }}
                    >
                      {categories.find(cat => cat.value === image.category)?.label || image.category}
                    </span>
                  </div>
                  {/* Render tags if present */}
                  {Array.isArray(image.tags) && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {image.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#fff7e6] text-[#7A2D2D] px-2 py-1 rounded-full font-medium border border-[#F7CAC9] border-opacity-60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cream-soft text-lg">No photos found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="cta-ghost px-6 py-3 rounded-full font-inter text-sm mt-4"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}