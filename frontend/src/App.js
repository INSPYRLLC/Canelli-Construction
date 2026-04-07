import { useState, useEffect } from "react";
import "@/App.css";
import axios from "axios";
import { 
  Phone, 
  Wrench, 
  Droplets, 
  Flame, 
  ShowerHead, 
  PipetteIcon,
  Clock,
  Shield,
  Award,
  Users,
  CheckCircle,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Star,
  AlertTriangle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Phone number constant
const PHONE_NUMBER = "(704) 555-1234";
const PHONE_HREF = "tel:+17045551234";

// Image URLs from design guidelines
const IMAGES = {
  hero: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg",
  about: "https://images.unsplash.com/photo-1635221798248-8a3452ad07cd",
  waterHeater: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d",
  fixtures: "https://images.unsplash.com/photo-1758548157466-7c454382035a",
  emergency: "https://images.unsplash.com/photo-1675973839743-64eb985b0184",
};

// Services data
const services = [
  {
    icon: Flame,
    title: "Water Heater Installation",
    description: "Expert installation of gas, electric, and tankless water heaters. We'll help you choose the right system for your home.",
    featured: true
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    description: "Advanced leak detection technology to find and fix leaks quickly, preventing costly water damage.",
    featured: false
  },
  {
    icon: PipetteIcon,
    title: "Drain Cleaning",
    description: "Professional drain cleaning services to keep your pipes flowing freely and prevent clogs.",
    featured: false
  },
  {
    icon: ShowerHead,
    title: "Fixture Installation",
    description: "Quality installation of faucets, sinks, toilets, and showers. Upgrade your home with modern fixtures.",
    featured: true
  },
  {
    icon: Wrench,
    title: "Whole-Home Repiping",
    description: "Complete repiping solutions for aging or damaged pipes. Improve water quality and pressure throughout your home.",
    featured: false
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description: "24/7 emergency services for burst pipes, severe leaks, and plumbing emergencies. We're always here when you need us.",
    featured: true
  }
];

// Why choose us data
const whyChooseUs = [
  { icon: Award, title: "30+ Years Experience", description: "Three decades of trusted service in Charlotte" },
  { icon: Users, title: "Family & Veteran Owned", description: "Proudly serving our community with integrity" },
  { icon: CheckCircle, title: "Free Estimates", description: "No-obligation quotes in Mecklenburg County" },
  { icon: Shield, title: "Honest Pricing", description: "Transparent pricing with no hidden fees or upselling" },
  { icon: Clock, title: "Fast Response", description: "Quick arrival times when you need us most" },
  { icon: Award, title: "Licensed & Insured", description: "Fully licensed and insured technicians" }
];

// Testimonials data
const testimonials = [
  {
    name: "Michael Thompson",
    location: "Myers Park, Charlotte",
    text: "E.A. Jones Plumbing replaced our entire home's plumbing. The team was professional, on-time, and their pricing was fair. Highly recommend!",
    rating: 5
  },
  {
    name: "Sarah Williams",
    location: "Dilworth, Charlotte",
    text: "Had an emergency leak at 2 AM and they responded within 30 minutes. Saved us from major water damage. Can't thank them enough!",
    rating: 5
  },
  {
    name: "Robert Chen",
    location: "South End, Charlotte",
    text: "Finally found a plumber I can trust. No upselling, just honest work at fair prices. They've been our go-to for 5 years now.",
    rating: 5
  },
  {
    name: "Jennifer Martinez",
    location: "Ballantyne, Charlotte",
    text: "The technician explained everything clearly and gave us options. Great experience from start to finish. True professionals!",
    rating: 5
  }
];

// Header Component
const Header = ({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header 
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" data-testid="logo" className="flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center ${isScrolled ? 'bg-[#0A1128]' : 'bg-white'}`}>
              <Wrench className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-[#0A1128]'}`} />
            </div>
            <div className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-[#0A1128]' : 'text-white'}`}>
              E.A. Jones Plumbing
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Services', 'About', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                data-testid={`nav-${item.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? 'text-[#475569] hover:text-[#0055FF]' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              data-testid="header-call-btn"
              className="flex items-center gap-2 bg-[#0055FF] text-white px-6 py-3 font-semibold transition-all hover:bg-[#0044CC]"
            >
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#0A1128]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#0A1128]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div data-testid="mobile-menu" className="lg:hidden bg-white border-t border-[#E2E8F0] py-4">
            <nav className="flex flex-col gap-2">
              {['Services', 'About', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-3 text-[#0A1128] font-medium hover:bg-[#F8FAFC]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href={PHONE_HREF}
                className="mx-4 mt-2 flex items-center justify-center gap-2 bg-[#0055FF] text-white px-6 py-3 font-semibold"
              >
                <Phone className="w-4 h-4" />
                {PHONE_NUMBER}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      id="hero" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="animate-fade-in-up opacity-0 stagger-1">
            <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-[#00A3FF] mb-6">
              Charlotte's Premier Plumbing Service
            </span>
          </div>
          
          {/* Headline */}
          <h1 
            data-testid="hero-headline"
            className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up opacity-0 stagger-2"
          >
            Charlotte's Trusted Plumbing Experts for Over 30 Years
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg text-white/80 mb-8 leading-relaxed animate-fade-in-up opacity-0 stagger-3">
            Reliable, honest, and professional plumbing services for homes and businesses. 
            Family-owned and veteran-operated since 1994.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up opacity-0 stagger-4">
            <a
              href={PHONE_HREF}
              data-testid="hero-call-btn"
              className="flex items-center justify-center gap-2 bg-[#0055FF] text-white px-8 py-4 font-semibold text-lg transition-all hover:bg-[#0044CC] call-pulse"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="#contact"
              data-testid="hero-estimate-btn"
              className="flex items-center justify-center gap-2 bg-white text-[#0A1128] px-8 py-4 font-semibold text-lg transition-all hover:bg-[#F8FAFC]"
            >
              Request Free Estimate
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up opacity-0 stagger-5">
            {[
              { icon: Shield, text: "Licensed" },
              { icon: CheckCircle, text: "Insured" },
              { icon: Users, text: "Family-Owned" },
              { icon: Clock, text: "24/7 Emergency" }
            ].map((badge, index) => (
              <div 
                key={index}
                data-testid={`trust-badge-${badge.text.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="flex items-center gap-2 text-white/90 trust-badge"
              >
                <badge.icon className="w-5 h-5 text-[#00A3FF]" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" data-testid="about-section" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={IMAGES.about} 
                alt="E.A. Jones Plumbing technician"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0A1128] text-white p-8">
              <div className="text-5xl font-bold text-[#00A3FF]">30+</div>
              <div className="text-sm uppercase tracking-wider mt-1">Years Experience</div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF] mb-4">
              About Us
            </span>
            <h2 data-testid="about-headline" className="text-4xl sm:text-5xl font-bold text-[#0A1128] mb-6">
              Family Values, Professional Service
            </h2>
            <p className="text-lg text-[#475569] mb-6 leading-relaxed">
              E.A. Jones Plumbing Co. has been a cornerstone of Charlotte's plumbing industry since 1994. 
              Founded by Edward A. Jones, a Navy veteran with a commitment to excellence, our company has 
              grown from a one-man operation to a trusted team serving thousands of families across Mecklenburg County.
            </p>
            <p className="text-lg text-[#475569] mb-8 leading-relaxed">
              We believe in doing things the right way—honest assessments, fair pricing, and quality work 
              that stands the test of time. No upselling, no hidden fees, just straightforward plumbing 
              solutions from people you can trust.
            </p>
            
            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Honesty & Transparency",
                "Fair Pricing",
                "Quality Workmanship",
                "Customer-First Approach"
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0055FF]" />
                  <span className="text-[#0A1128] font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section id="services" data-testid="services-section" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF] mb-4">
            Our Services
          </span>
          <h2 data-testid="services-headline" className="text-4xl sm:text-5xl font-bold text-[#0A1128] mb-6">
            Complete Plumbing Solutions
          </h2>
          <p className="text-lg text-[#475569]">
            From routine maintenance to emergency repairs, we handle all your plumbing needs with expertise and care.
          </p>
        </div>
        
        {/* Services Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              data-testid={`service-card-${index}`}
              className={`service-card bg-white border border-[#E2E8F0] p-8 ${
                service.featured ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              <div className="w-14 h-14 bg-[#0A1128] flex items-center justify-center mb-6 feature-icon">
                <service.icon className="w-7 h-7 text-[#00A3FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1128] mb-3">{service.title}</h3>
              <p className="text-[#475569] mb-6 leading-relaxed">{service.description}</p>
              <a 
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-[#0055FF] font-semibold hover:gap-3 transition-all"
              >
                Call Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  return (
    <section id="why-us" data-testid="why-us-section" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF] mb-4">
            Why Choose Us
          </span>
          <h2 data-testid="why-us-headline" className="text-4xl sm:text-5xl font-bold text-[#0A1128] mb-6">
            The E.A. Jones Difference
          </h2>
          <p className="text-lg text-[#475569]">
            We're not just plumbers—we're your neighbors, committed to delivering exceptional service with integrity.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((feature, index) => (
            <div 
              key={index}
              data-testid={`feature-card-${index}`}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center mb-6 feature-icon">
                <feature.icon className="w-8 h-8 text-[#0055FF]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1128] mb-2">{feature.title}</h3>
              <p className="text-[#475569]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF] mb-4">
            Testimonials
          </span>
          <h2 data-testid="testimonials-headline" className="text-4xl sm:text-5xl font-bold text-[#0A1128] mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#475569]">
            Don't just take our word for it—hear from the families and businesses we've proudly served.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              data-testid={`testimonial-card-${index}`}
              className="testimonial-card bg-white border border-[#E2E8F0] p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#0055FF] text-[#0055FF]" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg text-[#0A1128] mb-6 leading-relaxed font-light">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div>
                <div className="font-bold text-[#0A1128]">{testimonial.name}</div>
                <div className="text-sm text-[#475569]">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Area Section
const ServiceAreaSection = () => {
  return (
    <section id="service-area" data-testid="service-area-section" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF] mb-4">
              Service Area
            </span>
            <h2 data-testid="service-area-headline" className="text-4xl sm:text-5xl font-bold text-[#0A1128] mb-6">
              Proudly Serving Charlotte & Surrounding Areas
            </h2>
            <p className="text-lg text-[#475569] mb-8 leading-relaxed">
              We provide comprehensive plumbing services throughout Mecklenburg County and the greater Charlotte metropolitan area. 
              Whether you're in Uptown Charlotte or the surrounding suburbs, we're just a call away.
            </p>
            
            {/* Areas List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Charlotte",
                "Myers Park",
                "Dilworth",
                "South End",
                "Ballantyne",
                "Huntersville",
                "Matthews",
                "Pineville"
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0055FF]" />
                  <span className="text-[#0A1128]">{area}</span>
                </div>
              ))}
            </div>
            
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[#0A1128] text-white px-8 py-4 font-semibold transition-all hover:bg-[#0055FF]"
            >
              <Phone className="w-5 h-5" />
              Call for Service
            </a>
          </div>
          
          {/* Map Placeholder */}
          <div className="map-container aspect-square flex items-center justify-center border border-[#E2E8F0]">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-[#0055FF] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#0A1128] mb-2">Charlotte, NC</div>
              <div className="text-[#475569]">Mecklenburg County</div>
              <div className="mt-4 text-sm text-[#475569]">
                Serving the Queen City<br />& surrounding communities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Emergency Banner Section
const EmergencyBannerSection = () => {
  return (
    <section 
      id="emergency" 
      data-testid="emergency-section"
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.emergency})` }}
      />
      <div className="absolute inset-0 emergency-banner" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-pulse-glow inline-block p-4 bg-[#00A3FF]/20 mb-6">
          <AlertTriangle className="w-12 h-12 text-[#00A3FF]" />
        </div>
        <h2 data-testid="emergency-headline" className="text-4xl sm:text-5xl font-bold text-white mb-4">
          24/7 Emergency Plumbing Services
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Burst pipes? Severe leaks? Don't panic—our emergency team is available around the clock to help.
        </p>
        <a
          href={PHONE_HREF}
          data-testid="emergency-call-btn"
          className="inline-flex items-center gap-3 bg-[#00A3FF] text-white px-10 py-5 font-bold text-xl transition-all hover:bg-[#0088D4] call-pulse"
        >
          <Phone className="w-6 h-6" />
          Call Now for Immediate Help
        </a>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Thank you! We'll contact you shortly.");
      setFormData({ name: '', phone: '', issue: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block uppercase tracking-[0.2em] text-xs font-bold text-[#0055FF] mb-4">
              Contact Us
            </span>
            <h2 data-testid="contact-headline" className="text-4xl sm:text-5xl font-bold text-[#0A1128] mb-6">
              Get Your Free Estimate Today
            </h2>
            <p className="text-lg text-[#475569] mb-8 leading-relaxed">
              Ready to solve your plumbing problems? Give us a call or fill out the form, and we'll get back to you promptly.
            </p>
            
            {/* Phone */}
            <div className="mb-8">
              <a 
                href={PHONE_HREF}
                data-testid="contact-phone"
                className="inline-flex items-center gap-4 group"
              >
                <div className="w-16 h-16 bg-[#0A1128] flex items-center justify-center group-hover:bg-[#0055FF] transition-colors">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#475569] mb-1">Call Us Anytime</div>
                  <div className="text-2xl font-bold text-[#0A1128]">{PHONE_NUMBER}</div>
                </div>
              </a>
            </div>
            
            {/* Address */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#0055FF]" />
              </div>
              <div>
                <div className="text-sm text-[#475569] mb-1">Service Area</div>
                <div className="text-[#0A1128]">Charlotte, NC</div>
                <div className="text-[#0A1128]">Mecklenburg County & Surrounding Areas</div>
              </div>
            </div>
            
            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#0055FF]" />
              </div>
              <div>
                <div className="text-sm text-[#475569] mb-1">Hours</div>
                <div className="text-[#0A1128]">Monday - Friday: 7AM - 7PM</div>
                <div className="text-[#0A1128]">Emergency Service: 24/7</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white border border-[#E2E8F0] p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-[#0A1128] mb-2">Request a Free Estimate</h3>
            <p className="text-[#475569] mb-8">Fill out the form below and we'll contact you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0A1128] mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  data-testid="contact-form-name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-[#E2E8F0] focus:border-[#0055FF] focus:ring-[#0055FF]"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#0A1128] mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  data-testid="contact-form-phone"
                  type="tel"
                  placeholder="(704) 555-1234"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full border-[#E2E8F0] focus:border-[#0055FF] focus:ring-[#0055FF]"
                />
              </div>
              
              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-[#0A1128] mb-2">
                  Describe Your Issue
                </label>
                <Textarea
                  id="issue"
                  data-testid="contact-form-issue"
                  placeholder="Tell us about your plumbing problem..."
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  required
                  rows={4}
                  className="w-full border-[#E2E8F0] focus:border-[#0055FF] focus:ring-[#0055FF] resize-none"
                />
              </div>
              
              <button
                type="submit"
                data-testid="contact-form-submit"
                disabled={isSubmitting}
                className="w-full bg-[#0055FF] text-white px-8 py-4 font-semibold text-lg transition-all hover:bg-[#0044CC] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Request Free Estimate'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer data-testid="footer" className="bg-[#0A1128] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <Wrench className="w-6 h-6 text-[#0A1128]" />
              </div>
              <div className="font-bold text-xl">E.A. Jones Plumbing Co.</div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Family-owned and veteran-operated since 1994. Providing honest, reliable plumbing services to Charlotte and Mecklenburg County.
            </p>
            <a 
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-[#00A3FF] font-semibold hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#services" className="hover:text-white transition-colors">Water Heater Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Leak Detection & Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Drain Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Fixture Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Whole-Home Repiping</a></li>
              <li><a href="#emergency" className="hover:text-white transition-colors">Emergency Plumbing</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#service-area" className="hover:text-white transition-colors">Service Area</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            © {currentYear} E.A. Jones Plumbing Co. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-white/50 text-sm">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>Charlotte, NC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Header 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ServiceAreaSection />
        <EmergencyBannerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
