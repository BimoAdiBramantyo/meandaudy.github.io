import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useConfetti } from "@/hooks/use-confetti";
import { Heart, Send, Star, Gift, Camera, Music } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  messageType: z.enum(["love-note", "memory", "future-dream", "appreciation", "other"]),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  mood: z.enum(["romantic", "playful", "grateful", "excited", "peaceful"])
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const triggerConfetti = useConfetti();

  const messageTypes = [
    { value: "love-note", label: "Love Note", icon: Heart },
    { value: "memory", label: "Favorite Memory", icon: Camera },
    { value: "future-dream", label: "Future Dream", icon: Star },
    { value: "appreciation", label: "Appreciation", icon: Gift },
    { value: "other", label: "Other", icon: Send }
  ];

  const moods = [
    { value: "romantic", label: "Romantic 💕", color: "text-romantic-red" },
    { value: "playful", label: "Playful 😄", color: "text-champagne-gold" },
    { value: "grateful", label: "Grateful 🙏", color: "text-rose-gold" },
    { value: "excited", label: "Excited 🎉", color: "text-champagne-gold" },
    { value: "peaceful", label: "Peaceful 🕊️", color: "text-cream-soft" }
  ];

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      messageType: "love-note",
      subject: "",
      message: "",
      mood: "romantic"
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message! We'll get back to you soon. ❤️",
      });
      
      triggerConfetti();
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-playfair text-4xl md:text-5xl text-center gold-gradient-text mb-16">
          Send Notes to Both of Us
        </h2>
        
        <div className="bg-black bg-opacity-30 rounded-3xl p-8 backdrop-blur-sm border border-rose-gold border-opacity-20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cream-soft font-inter">Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your beautiful name"
                          className="w-full p-4 rounded-2xl bg-black bg-opacity-50 border border-rose-gold border-opacity-30 text-cream-soft focus:border-champagne-gold focus:outline-none transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage className="text-romantic-red" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-cream-soft font-inter">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="w-full p-4 rounded-2xl bg-black bg-opacity-50 border border-rose-gold border-opacity-30 text-cream-soft focus:border-champagne-gold focus:outline-none transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage className="text-romantic-red" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="messageType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-cream-soft font-inter">Message Type</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {messageTypes.map((type) => {
                          const IconComponent = type.icon;
                          return (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => field.onChange(type.value)}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                                field.value === type.value
                                  ? 'border-rose-gold bg-rose-gold text-black'
                                  : 'border-rose-gold border-opacity-30 text-cream-soft hover:border-opacity-60 bg-black bg-opacity-40'
                              }`}
                            >
                              <IconComponent className="w-6 h-6" />
                              <span className="text-xs text-center">{type.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </FormControl>
                    <FormMessage className="text-romantic-red" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-cream-soft font-inter">Subject</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="What's this note about?"
                        className="w-full p-4 rounded-2xl bg-black bg-opacity-50 border border-rose-gold border-opacity-30 text-cream-soft focus:border-champagne-gold focus:outline-none transition-all duration-300"
                      />
                    </FormControl>
                    <FormMessage className="text-romantic-red" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-cream-soft font-inter">Mood</FormLabel>
                    <FormControl>
                      <div className="flex flex-wrap gap-3">
                        {moods.map((mood) => (
                          <button
                            key={mood.value}
                            type="button"
                            onClick={() => field.onChange(mood.value)}
                            className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                              field.value === mood.value
                                ? 'border-rose-gold bg-rose-gold text-black'
                                : 'border-rose-gold border-opacity-30 text-cream-soft hover:border-opacity-60 bg-black bg-opacity-40'
                            }`}
                          >
                            {mood.label}
                          </button>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage className="text-romantic-red" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-cream-soft font-inter">Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={6}
                        placeholder="Share your heart... write something beautiful for both of us to cherish ❤️"
                        className="w-full p-4 rounded-2xl bg-black bg-opacity-50 border border-rose-gold border-opacity-30 text-cream-soft focus:border-champagne-gold focus:outline-none transition-all duration-300 resize-none"
                      />
                    </FormControl>
                    <FormMessage className="text-romantic-red" />
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full cta-solid px-8 py-4 rounded-2xl font-inter font-medium text-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Love Note
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
