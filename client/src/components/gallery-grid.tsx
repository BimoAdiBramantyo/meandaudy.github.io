import { Link } from "wouter";
import galleryImg from "@/assets/images/IMG-20250316-WA0045.jpg";
import storyImg from "@/assets/images/IMG_20250411_190318.jpg";
import notesImg from "@/assets/images/IMG-20250511-WA0054.jpg";

export default function GalleryGrid() {
  const galleryItems = [
    {
      image: galleryImg,
      alt: "Beautiful memories together",
      title: "Gallery",
      description: "Captured moments of our love story, from our first date to our most recent adventures together.",
      path: "/gallery"
    },
    {
      image: storyImg,
      alt: "Our love story moments",
      title: "Our Story",
      description: "The tale of how we met, fell in love, and created this beautiful journey together.",
      path: "/story"
    },
    {
      image: notesImg,
      alt: "Sweet memories and love notes",
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
