import { Link } from "wouter";

export default function GalleryGrid() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Romantic couple dancing at sunset",
      title: "Gallery",
      description: "Captured moments of our love story, from our first date to our most recent adventures together.",
      path: "/gallery"
    },
    {
      image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Couple walking hand in hand through a romantic garden",
      title: "Our Story",
      description: "The tale of how we met, fell in love, and created this beautiful journey together.",
      path: "/story"
    },
    {
      image: "https://images.unsplash.com/photo-1544273677-6e4b999de2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Handwritten love letters with rose petals",
      title: "Love Notes",
      description: "Sweet messages and memories we've shared throughout our relationship.",
      path: "/notes"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-playfair text-4xl md:text-5xl text-center gold-gradient-text mb-16">
          Our Beautiful Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="fade-in bg-black bg-opacity-30 rounded-3xl p-8 hover-lift backdrop-blur-sm border border-rose-gold border-opacity-20"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-2xl mb-6"
                loading="lazy"
              />
              <h3 className="font-playfair text-2xl gold-gradient-text mb-4">
                {item.title}
              </h3>
              <p className="text-cream-soft mb-6 leading-relaxed">
                {item.description}
              </p>
              <Link href={item.path}>
                <button className="cta-ghost px-6 py-3 rounded-full font-inter text-sm w-full">
                  {item.title === "Gallery" ? "View All Photos" : 
                   item.title === "Our Story" ? "Read Our Story" : "Read Notes"}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
