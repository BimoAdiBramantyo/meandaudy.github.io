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

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const triggerConfetti = useConfetti();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
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
          Get In Touch
        </h2>
        
        <div className="bg-black bg-opacity-30 rounded-3xl p-8 backdrop-blur-sm border border-rose-gold border-opacity-20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-cream-soft font-inter">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={6}
                        placeholder="Share your thoughts..."
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
                className="w-full cta-solid px-8 py-4 rounded-2xl font-inter font-medium text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
