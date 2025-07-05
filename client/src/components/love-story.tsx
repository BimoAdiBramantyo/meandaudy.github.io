import storyImg1 from "@/assets/images/IMG-20241230-WA0105.jpg";
import storyImg2 from "@/assets/images/IMG_20250411_232523.jpg";
import storyImg3 from "@/assets/images/IMG-20250520-WA0030.jpg";

export default function LoveStory() {
  const storyMilestones = [
    {
      title: "First Meeting",
      date: "March 15, 2020",
      description: "It was a rainy Tuesday when our eyes first met across the crowded coffee shop. Little did we know that this moment would change our lives forever. The way you smiled when you ordered your usual latte still makes my heart skip a beat.",
      image: storyImg1,
      alt: "Beautiful moment when we first met",
      reverse: false
    },
    {
      title: "First Date",
      date: "April 2, 2020",
      description: "Our first official date at that little Italian restaurant downtown. We talked for hours, laughing until our cheeks hurt. I knew then that you were someone special, someone I wanted to create memories with for the rest of my life.",
      image: storyImg2,
      alt: "Our special first date together",
      reverse: true
    },
    {
      title: "Becoming Official",
      date: "May 20, 2020",
      description: "Under the stars in Central Park, you asked me to be yours, and I couldn't have said yes fast enough. That night, surrounded by the city lights and your loving embrace, I knew I had found my forever person.",
      image: storyImg3,
      alt: "The moment we became official",
      reverse: false
    }
  ];

  return (
    <section id="story" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-playfair text-4xl md:text-5xl text-center gold-gradient-text mb-16">
          Our Love Story
        </h2>
        
        <div className="space-y-16">
          {storyMilestones.map((milestone, index) => (
            <div
              key={index}
              className={`fade-in flex flex-col ${
                milestone.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-8`}
            >
              <div className="md:w-1/2">
                <img
                  src={milestone.image}
                  alt={milestone.alt}
                  className="w-full h-80 object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-playfair text-3xl gold-gradient-text mb-4">
                  {milestone.title}
                </h3>
                <p className="text-rose-gold mb-4 font-inter">
                  {milestone.date}
                </p>
                <p className="text-cream-soft leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
