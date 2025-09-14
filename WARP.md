# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Elegant Beauty is a fully responsive beauty parlor website built with vanilla HTML5, CSS3, and JavaScript. This is a static website project with no build process or package managers - it runs directly in the browser and uses modern web technologies for animations and interactivity.

## Development Environment Setup

### Local Development Server
Since this is a static website, you can open files directly in a browser, but for optimal development experience, use a local server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed) 
npx http-server

# Using PHP (if installed)
php -S localhost:8000
```

Then visit `http://localhost:8000`

### Direct Browser Testing
For quick testing without a server:
```bash
# Windows - Open in default browser
start index.html

# Or double-click any .html file to open in browser
```

## Code Architecture

### File Structure
- **HTML Pages**: 5 main pages (index.html, services.html, about.html, gallery.html, contact.html)
- **CSS**: Single comprehensive stylesheet at `assets/css/styles.css` with CSS variables for theming
- **JavaScript**: All functionality consolidated in `assets/js/main.js`
- **External Dependencies**: CDN-based (Font Awesome, Google Fonts, AOS animation library)

### CSS Architecture
- **CSS Variables**: Centralized theming system in `:root` selector
- **Mobile-First Design**: Responsive breakpoints at 768px and 480px
- **Component-Based**: Organized by sections with clear comments
- **Animation System**: CSS transitions + AOS library for scroll animations

### JavaScript Architecture
- **Module Pattern**: Functions organized by feature (navigation, gallery, forms, FAQ)
- **Event-Driven**: DOM-ready initialization with event delegation
- **Mobile-Responsive**: Handles hamburger navigation and touch interactions
- **Form Validation**: Real-time validation for contact forms

## Key Interactive Features

### Navigation System
- Fixed navbar with backdrop blur effect
- Mobile hamburger menu with body scroll lock
- Active page highlighting based on current URL
- Smooth scroll behavior

### Gallery Filtering
- JavaScript-powered filter buttons with CSS transitions
- Categories: all, hair, facial, nails, makeup, salon
- Fade in/out animations on filter change

### Contact Forms
- Form validation with visual feedback
- Service selection dropdown
- Loading states and error handling
- Structured form data collection

### FAQ Accordion
- Single-item expansion behavior
- Smooth height animations
- Click-to-toggle functionality

## Design System

### Color Palette
- Primary: Gold (#d4af37) - luxury branding
- Secondary: Cream (#f5f2f0) - soft backgrounds  
- Accent: Rose (#e6b3ba) - feminine touches
- Text: Dark gray (#2c2c2c) - high contrast

### Typography
- Headings: Playfair Display (serif) - elegant
- Body: Inter (sans-serif) - readable
- Clamp-based responsive sizing

## Content Management

### Image Placeholders
The site uses icon-based placeholders for images. To add real images:
1. Create `assets/images/` directory
2. Replace placeholder divs with `<img>` tags
3. Update alt text and file paths
4. Optimize images for web (WebP recommended)

### Content Updates
- Business information: Update contact details in contact.html and footer sections
- Services: Modify service cards and descriptions across relevant pages
- Styling: Update CSS variables in `styles.css` for theme changes

## Performance Considerations

- **No Build Process**: Direct browser execution, minimal setup
- **CDN Dependencies**: External libraries loaded from CDNs
- **CSS Variables**: Easy theme customization without preprocessing
- **Vanilla JavaScript**: No framework overhead
- **Image Optimization**: Placeholder system ready for real images

## Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge (latest)
- CSS Grid & Flexbox: IE11+ with limitations
- JavaScript ES6: All modern browsers
- AOS animations: Modern browser support

## Testing Locally

### Visual Testing
```bash
# Open each page to verify:
start index.html
start services.html  
start about.html
start gallery.html
start contact.html
```

### Functionality Testing
- Test mobile navigation (hamburger menu)
- Verify gallery filters work on gallery.html
- Test contact form validation on contact.html
- Check FAQ accordion on contact.html
- Verify smooth scrolling and animations

## Common Tasks

### Theme Customization
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* Update other variables as needed */
}
```

### Adding New Pages
1. Copy structure from existing HTML file
2. Update navigation active states
3. Add page-specific content
4. Update footer links if needed

### Form Integration
To connect contact form to backend:
1. Modify form action in contact.html
2. Update JavaScript form handler in main.js
3. Add server-side processing