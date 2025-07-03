export default function LoveStory() {
  const storyMilestones = [
    {
      title: "First Meeting",
      date: "March 15, 2020",
      description: "It was a rainy Tuesday when our eyes first met across the crowded coffee shop. Little did we know that this moment would change our lives forever. The way you smiled when you ordered your usual latte still makes my heart skip a beat.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Couple meeting in a cozy coffee shop",
      reverse: false
    },
    {
      title: "First Date",
      date: "April 2, 2020",
      description: "Our first official date at that little Italian restaurant downtown. We talked for hours, laughing until our cheeks hurt. I knew then that you were someone special, someone I wanted to create memories with for the rest of my life.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Romantic dinner date with candlelight",
      reverse: true
    },
    {
      title: "Becoming Official",
      date: "May 20, 2020",
      description: "Under the stars in Central Park, you asked me to be yours, and I couldn't have said yes fast enough. That night, surrounded by the city lights and your loving embrace, I knew I had found my forever person.",
      image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Couple sharing a romantic moment in a beautiful park",
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
