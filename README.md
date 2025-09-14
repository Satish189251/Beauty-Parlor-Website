

# <img src="https://img.icons8.com/color/48/000000/beauty-salon.png" alt="Beauty Salon Icon"> Elegant Beauty - Beauty Parlor Website

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-FF6B6B?style=for-the-badge&logo=mediafire&logoColor=white" alt="Responsive">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

A fully responsive and modern beauty parlor website built with HTML5, CSS3, and vanilla JavaScript. This project showcases elegant design aesthetics suited for beauty and wellness businesses.

---

## 🌟 Features

| Feature | Description |
|---------|-------------|
| **Modern & Responsive Design** | Adapts seamlessly to desktop, tablet, and mobile devices |
| **5 Distinct Pages** | Home, Services, About, Gallery, and Contact pages |
| **Elegant Animations** | AOS (Animate On Scroll) library for smooth scroll animations |
| **Interactive Elements** | Mobile-friendly navigation, contact forms, gallery filters, and FAQ sections |
| **Beauty-Themed UI** | Soft color palette with premium visual effects |
| **Performance Optimized** | Lightweight vanilla JavaScript with smooth animations |

---

## 📁 Project Structure

```
beauty-parlor-website/
│
├── assets/
│   ├── css/
│   │   └── styles.css          # Main stylesheet with all styling
│   ├── js/
│   │   └── main.js             # Interactive functionality
│   └── images/                 # Directory for images (placeholder)
│
├── index.html                  # Home page
├── services.html               # Services page
├── about.html                  # About Us page
├── gallery.html                # Gallery page
├── contact.html                # Contact page
└── README.md                   # This file
```

---

## 🎨 Design Features

### Color Palette

| Color | Hex | Purpose |
|-------|-----|---------|
| **Primary** | #d4af37 | Elegant luxury feel |
| **Secondary** | #f5f2f0 | Soft background tones |
| **Accent** | #e6b3ba | Gentle feminine touch |
| **Text** | #2c2c2c | High readability |

### Typography

- **Headings**: Playfair Display (serif) - Elegant and sophisticated
- **Body Text**: Inter (sans-serif) - Clean and readable

### Key Design Elements

- Gradient backgrounds and buttons
- Soft shadows and rounded corners
- Hover effects and smooth transitions
- CSS Grid and Flexbox layouts
- Mobile-first responsive design

---

## 🚀 Technologies Used

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=white" alt="Font Awesome">
  <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white" alt="Google Fonts">
  <img src="https://img.shields.io/badge/AOS_Library-FF6B6B?style=flat-square&logo=animate&logoColor=white" alt="AOS Library">
</p>

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript**: Interactive functionality without frameworks
- **Font Awesome 6.4.0**: Icon library for visual elements
- **Google Fonts**: Custom typography (Playfair Display & Inter)
- **AOS Library**: Animate On Scroll for smooth animations

---

## 📱 Pages Overview

### 1. Home Page (index.html)
- Hero section with call-to-action
- Services overview with icons
- Why choose us section
- Client testimonials

### 2. Services Page (services.html)
- Detailed service categories
- Hair services, facial treatments, nail care, makeup services
- Pricing information
- Service descriptions

### 3. About Us Page (about.html)
- Company story and mission
- Team member profiles
- Core values and testimonials
- Professional credentials

### 4. Gallery Page (gallery.html)
- Filterable image gallery
- Before/after showcases
- Salon interior photos
- Client transformation results

### 5. Contact Page (contact.html)
- Contact form with validation
- Business hours and location
- Google Maps integration placeholder
- FAQ section

---

## ⚡ Interactive Features

| Feature | Implementation |
|---------|----------------|
| **Mobile Navigation** | Hamburger menu for mobile devices |
| **Form Validation** | Real-time contact form validation |
| **Gallery Filtering** | Interactive filter buttons |
| **FAQ Accordion** | Expandable question sections |
| **Scroll Animations** | AOS library integration |
| **Smooth Scrolling** | Enhanced user experience |
| **Loading States** | Button feedback and form submission |

---

## 🛠️ Setup & Installation

1. **Clone or download** the project files
2. **Extract** to your desired directory
3. **Open** `index.html` in a web browser
4. **No build process required** - pure HTML/CSS/JS

### Local Development Server (Optional)

For better development experience, use a local server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using PHP (if installed)
php -S localhost:8000
```

Then visit `http://localhost:8000`

---

## 📋 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| **Chrome** | Latest | ✅ Full |
| **Firefox** | Latest | ✅ Full |
| **Safari** | Latest | ✅ Full |
| **Edge** | Latest | ✅ Full |
| **Mobile Browsers** | Latest | ✅ Full |
| **Internet Explorer** | 11+ | ⚠️ Limited |

---

## 🎯 Customization

### Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #d4af37;
    --secondary-color: #f5f2f0;
    --accent-color: #e6b3ba;
    /* ... more variables */
}
```

### Content

- Update text content in HTML files
- Replace placeholder images in the `assets/images/` directory
- Modify contact information and business details

### Styling

- All styles are in `assets/css/styles.css`
- Organized by sections with clear comments
- Responsive breakpoints at 768px and 480px

---

## 📈 Performance Optimizations

- **CSS Variables**: Consistent theming and easy maintenance
- **Optimized Images**: Placeholder system ready for image optimization
- **Minified Libraries**: CDN links for external resources
- **Efficient JavaScript**: Event delegation and debounced functions
- **Smooth Animations**: GPU-accelerated CSS transitions

---

## 🔧 Future Enhancements

- [ ] **Image Optimization**: Add WebP support and lazy loading
- [ ] **Backend Integration**: Connect contact form to email service
- [ ] **CMS Integration**: Add content management capabilities
- [ ] **SEO Optimization**: Meta tags and structured data
- [ ] **Analytics**: Google Analytics integration
- [ ] **Accessibility**: Enhanced ARIA labels and keyboard navigation

---

## 📞 Support

For questions or customization requests:
- Review the code comments for guidance
- Check browser console for any JavaScript errors
- Ensure all file paths are correct for your setup

---

## 📄 License

This project is created for educational and commercial use. Feel free to modify and adapt for your beauty business needs.

---

<p align="center">
  <img src="https://img.icons8.com/color/48/000000/heart-health.png" alt="Heart Icon">
  <br>
  <em>Built with ❤️ for the beauty and wellness industry</em>
  <br>
  <small>Last updated: September 2025</small>
</p>