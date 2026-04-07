# Canelli Construction Website

A premium, modern, visually stunning website for a luxury construction company based in Charlotte, NC.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern Aesthetics**: Dark luxury theme with gold accents
- **Smooth Animations**: CSS animations and scroll-triggered effects
- **Interactive Elements**: Portfolio filtering, cost estimator, contact form
- **SEO Optimized**: Semantic HTML5 structure with proper meta tags
- **Performance Optimized**: Minimal dependencies, clean code structure

## Sections

1. **Hero** - Full-screen with background image and CTAs
2. **About** - Company story with experience badge
3. **Services** - 7 service cards with hover effects
4. **Portfolio** - Filterable project gallery
5. **Why Choose Us** - 5 key differentiators
6. **Process** - 4-step visual timeline
7. **Service Area** - Charlotte and surrounding areas
8. **Features** - Turnkey Homes & ADU highlights
9. **Testimonials** - Client reviews
10. **Estimator** - Interactive cost calculator
11. **CTA** - Strong call-to-action section
12. **Contact** - Form with Google Maps
13. **Footer** - Links and company info

## File Structure

```
canelli-construction/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## How to Run Locally

### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
Using Python:
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

Using Node.js:
```bash
# Install serve globally
npm install -g serve

# Run server
serve .

# Then open the provided URL
```

Using VS Code:
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Deployment

### Vercel
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Set build settings (not needed for static site)
4. Deploy

### GitHub Pages
1. Push code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (main)
4. Site will be available at `https://username.github.io/repo-name`

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-bg: #0A0A0A;
    --color-surface: #141414;
    --color-primary: #D4AF37;
    /* ... */
}
```

### Contact Information
Update in `index.html`:
- Phone: Search for `980-949-8800`
- Email: Search for `info@canelliconstruction.com`

### Images
Replace image URLs in `index.html`:
- All images use Unsplash/Pexels URLs
- Replace with your own images as needed
- Recommended sizes: Hero (1920x1080), Portfolio (800x600)

### Portfolio Projects
Edit the `.portfolio-card` elements in `index.html`:
```html
<div class="portfolio-card" data-category="residential">
    <img src="YOUR_IMAGE_URL" alt="Project Name" class="portfolio-image">
    <div class="portfolio-overlay">
        <p class="portfolio-category">Category</p>
        <h3 class="portfolio-title">Project Title</h3>
        <p class="portfolio-location">Location</p>
    </div>
</div>
```

### Pricing in Estimator
Update the `priceRanges` object in `script.js`:
```javascript
const priceRanges = {
    custom_home: { standard: [200, 300], premium: [300, 450], luxury: [450, 700] },
    // ... adjust prices as needed
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- **Lucide Icons** (CDN): Icon library
- **Google Fonts** (CDN): Manrope font
- **Fontshare** (CDN): Cabinet Grotesk font

No build tools or package managers required!

## Backend Integration (Optional)

The site is designed to work as a static website. If you want to connect it to a backend:

1. Uncomment the API functions in `script.js`
2. Set your `API_URL`
3. Modify form handlers to use the API functions

Required API endpoints:
- `POST /api/contact` - Contact form submissions
- `POST /api/estimate` - Cost calculations
- `GET /api/projects` - Portfolio projects

## License

MIT License - Feel free to use for personal or commercial projects.

## Credits

- Fonts: Google Fonts, Fontshare
- Icons: Lucide Icons
- Images: Unsplash, Pexels (replace with your own)
