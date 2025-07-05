import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Search, Filter, Grid, List } from "lucide-react";
import Navigation from "@/components/navigation";
import ImageLightbox from "@/components/image-lightbox";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Romantic couple dancing at sunset",
      title: "Our First Dance",
      description: "The moment we knew we were meant to be together",
      category: "special-moments"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Couple walking hand in hand through a romantic garden",
      title: "Garden Walks",
      description: "Our favorite way to spend Sunday mornings",
      category: "daily-life"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1544273677-6e4b999de2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Romantic picnic setup with wine and flowers",
      title: "Picnic Perfect",
      description: "Celebrating our six-month anniversary",
      category: "celebrations"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Cozy coffee shop moment",
      title: "Coffee Shop Memories",
      description: "Where it all began",
      category: "special-moments"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Romantic dinner with candles",
      title: "Candlelit Dinner",
      description: "Our first official date",
      category: "dates"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Couple silhouette against city skyline",
      title: "City Lights",
      description: "Making it official under the stars",
      category: "special-moments"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Beach sunset couple",
      title: "Beach Getaway",
      description: "Our first vacation together",
      category: "adventures"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Couple hiking together",
      title: "Adventure Awaits",
      description: "Conquering mountains together",
      category: "adventures"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1529903106645-98ba8702301b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Couple cooking together",
      title: "Kitchen Love",
      description: "Creating memories one recipe at a time",
      category: "daily-life"
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
                <div className={viewMode === 'grid' ? "p-6" : "flex-1"}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-playfair text-xl gold-gradient-text">
                      {image.title}
                    </h3>
                    <span className="text-xs bg-rose-gold bg-opacity-20 text-rose-gold px-2 py-1 rounded-full">
                      {categories.find(cat => cat.value === image.category)?.label || image.category}
                    </span>
                  </div>
                  <p className="text-cream-soft text-sm">
                    {image.description}
                  </p>
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