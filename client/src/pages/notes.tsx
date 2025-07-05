import { Link } from "wouter";
import { ArrowLeft, Heart, Star, Calendar, MessageCircle } from "lucide-react";
import Navigation from "@/components/navigation";

export default function Notes() {
  const loveNotes = [
    {
      id: 1,
      title: "Morning Sunshine",
      date: "January 14, 2025",
      category: "Daily Love",
      content: "Good morning, my love. Waking up next to you is the best part of every day. Your smile is my sunshine, and your laughter is my favorite melody. Thank you for being the most amazing person in my life. I love how you make even the simplest moments feel magical.",
      author: "Your Sleepy Partner",
      mood: "romantic",
      icon: Star
    },
    {
      id: 2,
      title: "Anniversary Thoughts",
      date: "March 15, 2024",
      category: "Special Occasions",
      content: "Four years ago, we met by chance. Today, I know it was destiny. Every day with you feels like a celebration of love. Here's to many more years of adventures, laughter, and endless love. You make every ordinary day feel like an anniversary.",
      author: "Your Forever Love",
      mood: "celebratory",
      icon: Heart
    },
    {
      id: 3,
      title: "Random Tuesday Appreciation",
      date: "August 8, 2024",
      category: "Just Because",
      content: "Just wanted to remind you on this random Tuesday that you're incredible. The way you care for others, your beautiful soul, and your amazing heart make me fall in love with you over and over again. You are my favorite person in the whole world.",
      author: "Your Biggest Fan",
      mood: "grateful",
      icon: MessageCircle
    },
    {
      id: 4,
      title: "After Our First Fight",
      date: "June 3, 2024",
      category: "Growth Together",
      content: "I'm sorry for being stubborn earlier. Fighting with you made me realize how much I hate being at odds with my favorite person. Thank you for being patient with me and for loving me even when I'm difficult. Our love is stronger than any disagreement.",
      author: "Your Apologetic Partner",
      mood: "sincere",
      icon: Heart
    },
    {
      id: 5,
      title: "Watching You Sleep",
      date: "November 20, 2024",
      category: "Quiet Moments",
      content: "I love watching you sleep peacefully beside me. In these quiet moments, I'm overwhelmed by how grateful I am to share this life with you. You look so serene, and I can't help but smile thinking about all our dreams coming true together.",
      author: "Your Guardian Angel",
      mood: "peaceful",
      icon: Star
    },
    {
      id: 6,
      title: "Your Cooking Adventures",
      date: "October 12, 2024",
      category: "Daily Life",
      content: "Even when you burn the toast or oversalt the pasta, I love every moment of our kitchen adventures. Your determination to make me happy through food (even when it doesn't go as planned) melts my heart. You're perfect in every imperfect way.",
      author: "Your Hungry Heart",
      mood: "playful",
      icon: MessageCircle
    },
    {
      id: 7,
      title: "Distance Makes the Heart Grow Fonder",
      date: "September 5, 2024",
      category: "Long Distance",
      content: "Being apart from you for even a day feels like forever. Every text, every call, every picture you send brightens my day. I'm counting down the hours until I can hold you again. Distance means nothing when you mean everything.",
      author: "Your Distant Heart",
      mood: "longing",
      icon: Heart
    },
    {
      id: 8,
      title: "Your Laugh",
      date: "December 1, 2024",
      category: "The Little Things",
      content: "Your laugh is contagious, and I find myself smiling just thinking about it. Whether it's your quiet chuckle at my terrible jokes or your full-hearted laughter at something silly, it's the most beautiful sound in the world. Never stop laughing, my love.",
      author: "Your Comedy Partner",
      mood: "joyful",
      icon: Star
    },
    {
      id: 9,
      title: "Future Dreams",
      date: "January 1, 2025",
      category: "Dreams & Goals",
      content: "As we start this new year together, I can't help but dream about our future. The house we'll buy, the trips we'll take, maybe even the family we'll build. Every dream I have includes you, and I can't wait to make them all come true together.",
      author: "Your Dream Partner",
      mood: "hopeful",
      icon: MessageCircle
    }
  ];

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'romantic': return 'text-romantic-red';
      case 'celebratory': return 'text-champagne-gold';
      case 'grateful': return 'text-rose-gold';
      case 'sincere': return 'text-cream-soft';
      case 'peaceful': return 'text-rose-gold';
      case 'playful': return 'text-champagne-gold';
      case 'longing': return 'text-romantic-red';
      case 'joyful': return 'text-champagne-gold';
      case 'hopeful': return 'text-rose-gold';
      default: return 'text-cream-soft';
    }
  };

  return (
    <div className="min-h-screen romantic-gradient">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/">
              <button className="text-cream-soft hover:text-rose-gold transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
            </Link>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold gold-gradient-text">
              Love Notes
            </h1>
          </div>

          <p className="text-cream-soft text-lg mb-12 max-w-2xl">
            A collection of heartfelt messages we've shared throughout our journey together. Each note captures a moment, a feeling, or a memory that makes our love story unique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loveNotes.map((note) => {
              const IconComponent = note.icon;
              return (
                <div
                  key={note.id}
                  className="bg-black bg-opacity-30 rounded-3xl p-6 hover-lift backdrop-blur-sm border border-rose-gold border-opacity-20 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <IconComponent className={`w-5 h-5 ${getMoodColor(note.mood)}`} />
                      <span className="text-rose-gold text-sm font-inter">{note.category}</span>
                    </div>
                    <div className="flex items-center gap-1 text-cream-soft text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(note.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="font-playfair text-xl gold-gradient-text mb-3">
                    {note.title}
                  </h3>

                  <p className="text-cream-soft text-sm leading-relaxed italic flex-grow mb-4">
                    "{note.content}"
                  </p>

                  <div className="mt-auto">
                    <p className="text-rose-gold font-inter text-sm">
                      - {note.author} ❤️
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-black bg-opacity-30 rounded-3xl p-8 backdrop-blur-sm border border-rose-gold border-opacity-20">
              <Heart className="text-romantic-red text-4xl mx-auto mb-4" />
              <h3 className="font-playfair text-3xl gold-gradient-text mb-4">
                Write Your Own Note
              </h3>
              <p className="text-cream-soft text-lg leading-relaxed mb-6">
                Every day with you gives me new reasons to fall in love. These notes are just a glimpse of the countless thoughts and feelings you inspire in me.
              </p>
              <Link href="/">
                <button className="cta-solid px-8 py-4 rounded-full font-inter font-medium text-lg">
                  Send Notes to Both of Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}