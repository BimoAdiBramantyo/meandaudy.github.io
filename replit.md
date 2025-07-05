# Romantic Love Story Website

## Overview

This is a beautiful romantic web application built with React, Express.js, and TypeScript. The application presents an elegant and romantic love story website with a sophisticated design featuring dark red gradients, gold text, and interactive elements. It combines modern web technologies with a romantic aesthetic to create an immersive user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom romantic theme variables
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Routing**: Wouter for client-side navigation
- **State Management**: React hooks with TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: CSS transitions and Intersection Observer API

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Module System**: ES modules (type: "module")
- **API Routes**: RESTful endpoints for contact form handling
- **Development**: Vite middleware for hot module replacement
- **Production**: Static file serving with optimized builds

### Build System
- **Bundler**: Vite for frontend, esbuild for backend
- **TypeScript**: Strict type checking across the entire stack
- **Path Mapping**: Absolute imports with @ aliases
- **Asset Optimization**: Lazy loading for images and optimized builds

## Key Components

### User Interface Components
- **Hero Section**: Full-screen romantic landing with floating hearts animation
- **Navigation**: Sticky header with smooth scroll spy and mobile hamburger menu
- **Gallery Grid**: Responsive image gallery with hover effects
- **Love Story**: Timeline-based story presentation with alternating layouts
- **Love Notes Carousel**: Auto-rotating testimonial-style content
- **Contact Form**: Validated form with success animations
- **Audio Player**: Sticky bottom player with progress tracking
- **Easter Eggs**: Hidden interactive elements with confetti effects

### Interactive Features
- **Scroll Animations**: Intersection Observer-based fade-in effects
- **Smooth Scrolling**: Native CSS scroll behavior with JavaScript fallbacks
- **Hover Effects**: Subtle animations on interactive elements
- **Confetti System**: Canvas-based particle effects for celebrations
- **Toast Notifications**: User feedback system with elegant styling

### Responsive Design
- **Mobile-First**: Tailwind's responsive design approach
- **Breakpoints**: Optimized layouts for mobile, tablet, and desktop
- **Touch-Friendly**: Mobile-optimized navigation and interactions
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## Data Flow

### Client-Side Data Flow
1. **Component State**: Local state management using React hooks
2. **Form Validation**: Zod schemas with React Hook Form integration
3. **API Communication**: TanStack Query for server state management
4. **User Interactions**: Event handlers trigger state updates and API calls
5. **Animations**: CSS classes and JavaScript timers for visual effects

### Server-Side Data Flow
1. **HTTP Requests**: Express middleware processes incoming requests
2. **Route Handling**: RESTful API endpoints with proper error handling
3. **Data Validation**: Server-side validation for contact form submissions
4. **Response Formatting**: Consistent JSON response structure
5. **Static Assets**: Vite serves development assets, Express serves production files

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, Radix UI components
- **Forms**: React Hook Form, Zod validation
- **Animation**: Canvas Confetti for particle effects
- **Utilities**: clsx, class-variance-authority for conditional styling
- **Fonts**: Google Fonts (Playfair Display, Inter)

### Backend Dependencies
- **Server**: Express.js framework
- **Database**: Drizzle ORM with PostgreSQL support (configured but not actively used)
- **Development**: Vite for middleware, tsx for TypeScript execution
- **Utilities**: Various Node.js utilities for file handling and path resolution

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Code Quality**: ESLint configuration, TypeScript strict mode
- **Development**: Hot module replacement, error overlay, development banner

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Backend Development**: tsx for TypeScript execution
- **Database**: PostgreSQL with Drizzle migrations
- **Environment Variables**: DATABASE_URL configuration

### Production Build
- **Frontend**: Vite build with optimized assets
- **Backend**: esbuild bundling with external packages
- **Static Serving**: Express serves built frontend assets
- **Process Management**: Single Node.js process handling both frontend and backend

### Database Integration
- **ORM**: Drizzle with PostgreSQL dialect
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless driver
- **Schema**: User management table (expandable for love story content)

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## Recent Updates (January 2025)

### New Features Added
- **Advanced Gallery Page**: Added search functionality, category filtering, grid/list view modes, and image lightbox with navigation
- **Dedicated Story Page**: Comprehensive love story timeline with alternating layouts and detailed chapters
- **Enhanced Notes Page**: Categorized love notes with mood indicators, icons, and enhanced styling
- **Advanced Contact Form**: Added message types, mood selection, subject field, and enhanced validation
- **Image Lightbox Component**: Full-screen image viewer with download functionality and thumbnail navigation
- **Navigation Improvements**: Updated to use proper routing between pages instead of scroll anchors

### Architecture Changes
- **Page-Based Navigation**: Converted from single-page scroll sections to multi-page architecture
- **Component Enhancement**: Added sophisticated UI components with filtering and search capabilities
- **Form Enhancements**: Upgraded contact form with multiple field types and better user experience

## User Preferences

```
Preferred communication style: Simple, everyday language.
User requested: More features, separate pages for Gallery/Story/Notes, 3-card layout, "Send Notes to Both of Us" for contact form
```