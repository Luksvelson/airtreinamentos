# AirTreinamentos Design Guidelines

## Design Approach
**Strategy**: Professional B2B Design System approach inspired by enterprise platforms like Salesforce, HubSpot, and technical training sites like Udacity Business. The design must convey technical expertise, credibility, and professionalism while maintaining accessibility for decision-makers.

## Brand Colors (Provided)
- Primary: `#FEB23D` (Vibrant Orange) - CTAs, highlights, active states
- Secondary: `#041F3F` (Deep Navy Blue) - Headers, text, trust elements
- Accent: `#FFFFFF` (White) - Backgrounds, contrast
- Supporting palette: Light grays (#F8F9FA, #E9ECEF) for backgrounds, dark grays (#495057, #6C757D) for secondary text

## Typography System
- **Headings**: Inter or Poppins (weights: 600-700) - Modern, professional, technical
- **Body**: Inter or System UI (weights: 400-500) - Optimal readability for technical content
- **Scale**: H1: 48px, H2: 36px, H3: 28px, H4: 24px, Body: 16px, Small: 14px
- **Line height**: 1.5 for body, 1.2 for headings

## Layout System
**Spacing primitives**: Use Tailwind units of `4, 6, 8, 12, 16, 20, 24` (p-4, m-8, gap-12, etc.)
- Container: max-w-7xl with px-4 md:px-8
- Section padding: py-16 md:py-24
- Component spacing: gap-8 to gap-16 between major blocks
- Grid gaps: gap-6 to gap-8 for card layouts

## Page Structure & Sections

### Hero Section (Full viewport impact - 85vh)
- Large hero image: Industrial compressor facility or training session (professional photography, bright lighting)
- Overlay gradient from `#041F3F` (60% opacity) to transparent
- Centered content with headline + subheadline + dual CTAs
- Trust indicators: "Grupo AirPress" badge, years of experience, client count
- CTA buttons with blur background treatment (backdrop-blur-md)

### Navigation
- Fixed header with logo left, menu center, CTA button right
- Desktop: horizontal menu items with hover underline (orange)
- Mobile: hamburger menu with slide-in panel
- Include: Início, Treinamentos, Instrutores, Sobre, Contato

### Training Overview Section
- 2-column grid (lg:grid-cols-2)
- Left: Course card with image, title, duration badge, "2 dias presenciais" indicator
- Right: Key benefits list with icons (Heroicons outline style)
- Bottom: "Ver ementa completa" CTA

### Features/Benefits Section
- 3-column grid (md:grid-cols-3) with icon-title-description cards
- Icons: Technical expertise, Hands-on practice, Industry certification
- Subtle card elevation on hover
- Background: light gray (#F8F9FA)

### Target Audience Section
- Centered heading "Quem deve participar"
- 4-column grid (md:grid-cols-2 lg:grid-cols-4) with role cards
- Each card: Icon, role title, brief description
- Roles: Gestores Industriais, Engenheiros, Técnicos de Manutenção, Compradores Técnicos

### Instructor Placeholder Section
- Heading + placeholder cards for future instructor profiles
- 3-column grid layout with photo placeholders, name, specialty
- Professional headshot style (circular or square with rounded corners)

### Call-to-Action Section
- Full-width with navy blue background (#041F3F)
- Centered white text with orange CTA button
- Include: Phone number, email, "Solicite proposta" button
- Supporting text: response time commitment

### Footer
- Dark navy (#041F3F) background with white/gray text
- 4-column layout: About AirPress, Quick Links, Contact Info, Social Media
- Bottom bar: Copyright, Privacy Policy links
- Logo in grayscale or white variant

## Component Design Patterns

### Cards
- White background, subtle shadow (shadow-sm to shadow-md)
- 8px border-radius (rounded-lg)
- Padding: p-6 to p-8
- Hover: Slight lift (transform translateY) + shadow increase

### Buttons
- Primary: Orange background, white text, medium weight
- Secondary: Navy outline, navy text
- Sizes: py-3 px-6 (medium), py-4 px-8 (large)
- Border radius: rounded-lg
- All buttons implement their own hover/active states

### Form Elements
- Input fields: border-2, rounded-lg, py-3 px-4
- Focus state: Orange border (#FEB23D)
- Labels: font-medium, text-gray-700
- Consistent height across all inputs

## Images
**Required Images**:
1. **Hero**: Large industrial training facility or compressor room - bright, professional, high-tech feeling (16:9 aspect ratio, 1920x1080)
2. **Course card**: Close-up of air compressor equipment or training session (4:3 aspect ratio, 800x600)
3. **Instructor placeholders**: Professional headshots (square, 400x400)
4. **Optional**: Background pattern for sections (subtle technical/industrial motif)

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Single column on mobile, expand to multi-column on md+
- Hero text scales down, images optimize for viewport
- Navigation collapses to hamburger on mobile

## Key Principles
- Trust through professional imagery and consistent branding
- Clear value proposition above the fold
- Easy access to contact/enrollment CTAs
- Technical credibility through clean, modern design
- B2B decision-maker focused (efficiency over flash)

**Animation**: Minimal - subtle hover states, smooth transitions (200-300ms), no distracting effects