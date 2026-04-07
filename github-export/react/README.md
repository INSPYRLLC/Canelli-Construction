# Canelli Construction - React Version

A premium, modern construction company website built with React, Vite, and Tailwind CSS.

## Features

- **Modern Stack**: React 18, Vite, Tailwind CSS
- **Component-Based**: Clean, reusable components
- **Responsive**: Mobile-first design
- **Fast**: Optimized with Vite
- **Type-Safe Ready**: Easy to add TypeScript

## Project Structure

```
canelli-construction-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Process.jsx
│   │   ├── ServiceArea.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Estimator.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── constants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/canelli-construction-react.git
cd canelli-construction-react

# Install dependencies
npm install
# or
yarn
```

### Development

```bash
# Start dev server
npm run dev
# or
yarn dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Build
npm run build
# or
yarn build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Vite and deploys

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment

```bash
npm run build
# Upload contents of 'dist' folder to your hosting
```

## Customization

### Contact Information

Edit `src/data/constants.js`:

```javascript
export const PHONE = '980-949-8800';
export const EMAIL = 'info@canelliconstruction.com';
```

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  background: '#0A0A0A',
  surface: '#141414',
  primary: '#D4AF37', // Gold accent
  // ...
}
```

### Images

Update URLs in `src/data/constants.js`:

```javascript
export const IMAGES = {
  hero: 'YOUR_HERO_IMAGE_URL',
  about: 'YOUR_ABOUT_IMAGE_URL',
  // ...
};
```

### Portfolio Projects

Edit `PORTFOLIO_PROJECTS` in `src/data/constants.js`:

```javascript
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Your Project',
    category: 'residential',
    location: 'Location',
    image: 'IMAGE_URL',
  },
  // ...
];
```

### Estimator Pricing

Update `PRICE_RANGES` in `src/data/constants.js`:

```javascript
export const PRICE_RANGES = {
  custom_home: {
    standard: [200, 300], // [min, max] per sq ft
    premium: [300, 450],
    luxury: [450, 700],
  },
  // ...
};
```

## Adding Backend Integration

To connect to a backend API:

1. Create `.env` file:
```
VITE_API_URL=https://your-api.com
```

2. Create API utility:
```javascript
// src/api/index.js
const API_URL = import.meta.env.VITE_API_URL;

export async function submitContact(data) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
```

3. Use in components:
```javascript
import { submitContact } from '../api';

const handleSubmit = async (formData) => {
  await submitContact(formData);
};
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Credits

- Icons: Lucide React
- Fonts: Google Fonts (Manrope), Fontshare (Cabinet Grotesk)
- Images: Unsplash, Pexels (replace with your own)
