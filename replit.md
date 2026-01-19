# AirTreinamentos

## Overview

AirTreinamentos is a B2B professional training platform for the compressed air industry, part of the Grupo AirCenter. The application serves as a marketing website and lead generation tool for technical training courses targeting industrial managers, engineers, and maintenance technicians in Brazil.

The platform features a landing page with training information, instructor profiles, and a contact form for lead capture. Content is in Brazilian Portuguese.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom brand color variables
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with tsx for development
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Build System**: Vite for frontend, esbuild for backend bundling

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Current Storage**: In-memory storage implementation (`MemStorage` class)
- **Database Ready**: Drizzle config and schema prepared for PostgreSQL migration

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/   # UI and page components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities and query client
│       └── services/     # API service layer
├── server/           # Express backend
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── static.ts     # Static file serving
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema and Zod validators
└── migrations/       # Database migrations (Drizzle Kit)
```

### Design System
The application follows a professional B2B design system with:
- **Primary Color**: `#FEB23D` (Vibrant Orange) - CTAs and highlights
- **Secondary Color**: `#041F3F` (Deep Navy Blue) - Headers and trust elements
- **Typography**: Inter/DM Sans font family
- **Components**: shadcn/ui "new-york" style variant

## External Dependencies

### Database
- PostgreSQL (via `DATABASE_URL` environment variable)
- Drizzle ORM for database operations
- drizzle-kit for migrations (`npm run db:push`)

### UI Libraries
- Radix UI primitives (dialogs, menus, forms, etc.)
- Lucide React for icons
- React Icons for brand icons (LinkedIn)
- Embla Carousel for carousels
- Vaul for drawer components

### Form & Validation
- React Hook Form for form state management
- Zod for schema validation
- drizzle-zod for automatic schema generation

### Development Tools
- Vite with React plugin for development server
- Replit-specific plugins (error overlay, cartographer, dev banner)
- TSX for TypeScript execution