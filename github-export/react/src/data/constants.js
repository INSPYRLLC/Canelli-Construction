// Contact Information
export const PHONE = '980-949-8800';
export const PHONE_HREF = 'tel:+19809498800';
export const EMAIL = 'info@canelliconstruction.com';

// Image URLs (Replace with your own images)
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1774685110718-c5b4fe026144?w=1920',
  about: 'https://images.unsplash.com/photo-1772442198624-4fc4d7281e89?w=800',
  charlotte: 'https://images.unsplash.com/photo-1582555645330-9fa5f195e1ca?w=1200',
};

// Services
export const SERVICES = [
  { icon: 'Home', title: 'Custom Home Building', description: 'Bespoke luxury homes designed and built to your exact specifications, from foundation to finishing touches.' },
  { icon: 'Building2', title: 'Turnkey Homes', description: 'Move-in ready homes built on your lot with premium finishes and stress-free project management.' },
  { icon: 'Building2', title: 'Commercial Construction', description: 'Professional commercial spaces that reflect your brand and meet your business needs.' },
  { icon: 'Hammer', title: 'Remodeling', description: 'Transform your existing space with expert renovations that blend modern design with timeless craftsmanship.' },
  { icon: 'Home', title: 'ADU Construction', description: 'Accessory dwelling units that maximize your property\'s potential and value.' },
  { icon: 'Plus', title: 'Home Additions', description: 'Seamlessly expand your living space with additions that complement your home\'s architecture.' },
  { icon: 'Building2', title: 'Residential Development', description: 'End-to-end development services for multi-unit residential projects.' },
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  { icon: 'Award', title: '20+ Years Experience', description: 'Two decades of excellence in the US & Europe' },
  { icon: 'PenTool', title: 'Full-Service', description: 'Design → Permits → Build, all under one roof' },
  { icon: 'DollarSign', title: 'Transparent Pricing', description: 'No hidden costs, no surprises' },
  { icon: 'Shield', title: 'High-End Craftsmanship', description: 'Premium materials and meticulous attention to detail' },
  { icon: 'Users', title: 'Client-Focused', description: 'Your vision drives every decision we make' },
];

// Process Steps
export const PROCESS_STEPS = [
  { number: '01', title: 'Suitability', description: 'We assess your project requirements, budget, and timeline to ensure we\'re the right fit.' },
  { number: '02', title: 'Design', description: 'Collaborative design process to bring your vision to life with detailed plans and 3D renderings.' },
  { number: '03', title: 'Permits', description: 'We handle all permits and approvals, navigating regulations so you don\'t have to.' },
  { number: '04', title: 'Build', description: 'Expert construction with regular updates, quality checkpoints, and on-time delivery.' },
];

// Service Areas
export const SERVICE_AREAS = [
  'Charlotte', 'Matthews', 'Huntersville', 'Belmont', 'Concord',
  'Lake Norman', 'SouthPark', 'Myers Park', 'Ballantyne', 'Waxhaw',
];

// Portfolio Projects
export const PORTFOLIO_PROJECTS = [
  { id: 1, title: 'Modern Lakefront Estate', category: 'residential', location: 'Lake Norman, NC', image: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=800' },
  { id: 2, title: 'Contemporary Urban Residence', category: 'residential', location: 'Myers Park, Charlotte', image: 'https://images.unsplash.com/photo-1760072513442-9872656c1b07?w=800' },
  { id: 3, title: 'Luxury ADU Suite', category: 'adu', location: 'SouthPark, Charlotte', image: 'https://images.unsplash.com/photo-1757262798620-c2cc40cfb440?w=800' },
  { id: 4, title: 'Boutique Office Building', category: 'commercial', location: 'South End, Charlotte', image: 'https://images.unsplash.com/photo-1766603636700-e9d80473f40f?w=800' },
  { id: 5, title: 'Historic Home Renovation', category: 'remodel', location: 'Dilworth, Charlotte', image: 'https://images.unsplash.com/photo-1774685110718-c5b4fe026144?w=800' },
  { id: 6, title: 'Turnkey Family Home', category: 'residential', location: 'Ballantyne, Charlotte', image: 'https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?w=800' },
];

// Testimonials
export const TESTIMONIALS = [
  { name: 'David & Sarah Mitchell', project: 'Custom Home, Lake Norman', text: 'Canelli Construction exceeded every expectation. Our lakefront home is a masterpiece—their attention to detail and communication throughout was exceptional.', rating: 5 },
  { name: 'Michael Chen', project: 'Commercial Build, South End', text: 'Professional, transparent, and delivered on time. Our office building has received countless compliments. A true partner in our vision.', rating: 5 },
  { name: 'Jennifer & Robert Walsh', project: 'Home Renovation, Dilworth', text: 'They transformed our 1920s home into a modern sanctuary while preserving its character. The craftsmanship is simply outstanding.', rating: 5 },
  { name: 'The Morrison Family', project: 'ADU Construction, Myers Park', text: 'Our ADU was completed ahead of schedule and the quality is indistinguishable from the main house. Highly recommend!', rating: 5 },
];

// Price Ranges for Estimator (per sq ft)
export const PRICE_RANGES = {
  custom_home: { standard: [200, 300], premium: [300, 450], luxury: [450, 700] },
  turnkey: { standard: [180, 250], premium: [250, 350], luxury: [350, 500] },
  remodel: { standard: [150, 250], premium: [250, 400], luxury: [400, 600] },
  adu: { standard: [200, 280], premium: [280, 380], luxury: [380, 500] },
  addition: { standard: [180, 280], premium: [280, 400], luxury: [400, 550] },
  commercial: { standard: [150, 250], premium: [250, 400], luxury: [400, 600] },
};
