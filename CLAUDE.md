# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ CRITICAL CHECKS - ALWAYS VERIFY

### Form Integration
**ALWAYS CHECK:** When reviewing any form on the site, verify it's properly connected to the backend:
- ✅ Netlify Forms: Look for `data-netlify="true"` attribute and hidden form in index.html
- ✅ Form submission handler: Should POST to Netlify endpoint, not just console.log
- ✅ Never leave forms with only console.log or alert() - they must submit somewhere
- ✅ Check for success/error handling and user feedback
- **Current Forms:** Contact form uses Netlify Forms (ContactFormNetlify component)

## Project Overview

SparkyBen Electrical is a React-based website for an electrical services company built with TypeScript, Vite, and Tailwind CSS. The site showcases various electrical services and includes multiple pages like services, pricing, testimonials, and contact forms.

## Development Commands

```bash
npm run dev       # Start development server with hot reload
npm run build     # Build for production
npm run lint      # Run ESLint for code quality
npm run preview   # Preview production build locally
```

## Architecture & Key Components

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with PostCSS
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **SEO**: React Helmet for meta tags

### Project Structure

The application follows a standard React SPA architecture:

- **`/src/App.tsx`**: Main router configuration with all page routes
- **`/src/pages/`**: Individual page components (Home, Services, About, Contact, etc.)
- **`/src/components/`**: Reusable UI components
  - `Header.tsx` & `Footer.tsx`: Site navigation and footer
  - `ServiceCard.tsx`: Service display cards
  - `ContactForm.tsx`: Contact form with validation
  - `SeoMetaTags.tsx`: SEO meta tag management
  - `SchemaOrgScript.tsx`: Structured data for SEO
- **`/src/data/`**: Static data and type definitions
  - `services.ts`: Complete service listings with detailed descriptions
  - `testimonials.ts`: Customer testimonials data

### Key Patterns

1. **Service Management**: Services are centrally defined in `/src/data/services.ts` with comprehensive descriptions. The `ServiceDetail` page dynamically renders based on URL parameters.

2. **SEO Implementation**: Each page includes SEO meta tags via `SeoMetaTags` component and structured data through `SchemaOrgScript`.

3. **Image Management**: Images are organized in `/public/images/` with WebP format for optimization. The `ResponsiveImage` component handles multiple formats.

4. **Form Handling**: Contact forms use `react-hook-form` for validation and state management.

5. **Routing**: All routes are defined in `App.tsx` with a 404 fallback page.

## Important Considerations

- **Brand Colors**: Primary color is `#70BBC5` (defined in Tailwind config)
- **Favicon Setup**: See `FAVICON_GUIDE.md` for favicon implementation details
- **Image Optimization**: Use WebP format with PNG fallbacks
- **Mobile Responsiveness**: All components use Tailwind's responsive utilities
- **Accessibility**: Components include proper ARIA labels and semantic HTML

## Testing & Quality

Before committing changes:
1. Run `npm run lint` to check for code quality issues
2. Run `npm run build` to ensure the production build succeeds
3. Test responsive design on both mobile and desktop viewports
4. Verify all internal links work correctly