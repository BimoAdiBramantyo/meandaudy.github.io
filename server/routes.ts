import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }
      
      // In a real application, you would save this to a database
      // or send an email notification
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ 
        message: "Thank you for your message! We'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Something went wrong. Please try again." 
      });
    }
  });

  // Custom 404 route - redirect to React app's 404 page
  app.get("/404", (req, res) => {
    // Let React handle the 404 page
    res.sendFile(path.resolve("dist/public/index.html"));
  });

  const httpServer = createServer(app);
  return httpServer;
}
