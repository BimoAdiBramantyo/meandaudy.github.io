import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation";

export default function Story() {
  const storyChapters = [
    {
      id: 1,
      title: "The Beginning",
      date: "March 15, 2020",
      content: "It was a rainy Tuesday when our eyes first met across the crowded coffee shop. You were ordering your usual latte, and I was pretending to read my book while stealing glances at you. Little did we know that this chance encounter would change our lives forever. The way you smiled when the barista called your name still makes my heart skip a beat.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Cozy coffee shop with warm lighting"
    },
    {
      id: 2,
      title: "First Words",
      date: "March 18, 2020",
      content: "Three days later, I gathered the courage to approach you. My hands were shaking as I asked if I could buy you a coffee. Your laugh was like music to my ears when you said, 'I was wondering when you'd finally ask.' We talked for hours about everything and nothing, and I knew then that I had found someone special.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Two people having coffee together"
    },
    {
      id: 3,
      title: "Our First Date",
      date: "April 2, 2020",
      content: "Our first official date at that little Italian restaurant downtown. We were both nervous, but it felt so natural being together. We laughed until our cheeks hurt, shared stories about our dreams, and I knew I wanted to create a lifetime of memories with you. You had marinara sauce on your cheek, and when I pointed it out, you blushed the most beautiful shade of pink.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Romantic dinner with candles and wine"
    },
    {
      id: 4,
      title: "Making It Official",
      date: "May 20, 2020",
      content: "Under the stars in Central Park, surrounded by the city lights and the sound of distant traffic, I asked you to be mine. Your eyes sparkled brighter than any star that night when you said yes. We danced to the music from a nearby café, and I knew that this was the beginning of our forever. That night, I realized that home isn't a place—it's a person, and you are my home.",
      image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Couple under city lights at night"
    },
    {
      id: 5,
      title: "Our First Trip",
      date: "July 15, 2020",
      content: "Our first vacation together to the beach. We built sandcastles, watched sunsets, and talked about our future. You looked so beautiful in the golden hour light, and I secretly took dozens of photos of you when you weren't looking. We promised each other that we'd travel the world together, one adventure at a time.",
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Beach sunset with couple silhouette"
    },
    {
      id: 6,
      title: "Moving In Together",
      date: "September 1, 2020",
      content: "The day we got the keys to our first apartment together. We spent the entire day moving boxes, arguing about where to put the couch, and laughing at our terrible interior decorating skills. That night, we ordered pizza and sat on the floor of our empty living room, dreaming about all the memories we'd make in our new home.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Couple unpacking boxes in new apartment"
    }
  ];

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

          <p className="text-cream-soft text-lg mb-12 max-w-2xl">
            Every love story is beautiful, but ours is our favorite. Here's how two hearts found their way to each other and decided to beat as one.
          </p>

          <div className="space-y-16">
            {storyChapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                <div className="md:w-1/2">
                  <img
                    src={chapter.image}
                    alt={chapter.alt}
                    className="w-full h-80 object-cover rounded-2xl hover-lift"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="bg-black bg-opacity-30 rounded-3xl p-8 backdrop-blur-sm border border-rose-gold border-opacity-20">
                    <h3 className="font-playfair text-3xl gold-gradient-text mb-4">
                      {chapter.title}
                    </h3>
                    <p className="text-rose-gold mb-6 font-inter text-lg">
                      {chapter.date}
                    </p>
                    <p className="text-cream-soft leading-relaxed text-lg">
                      {chapter.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-black bg-opacity-30 rounded-3xl p-8 backdrop-blur-sm border border-rose-gold border-opacity-20">
              <h3 className="font-playfair text-3xl gold-gradient-text mb-4">
                To Be Continued...
              </h3>
              <p className="text-cream-soft text-lg leading-relaxed">
                Our story is still being written, one beautiful day at a time. Each moment with you adds another magical chapter to our love story. Here's to all the adventures yet to come, my love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}