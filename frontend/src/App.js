import { useState, useEffect } from "react";
import "@/App.css";
import axios from "axios";
import { 
  Phone, 
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Home,
  Building2,
  Hammer,
  Ruler,
  PenTool,
  FileCheck,
  HardHat,
  Award,
  Users,
  DollarSign,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Calculator,
  CheckCircle,
  Plus
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster, toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Contact info
const PHONE_NUMBER = "980-949-8800";
const PHONE_HREF = "tel:+19809498800";
const EMAIL = "info@canelliconstruction.com";

// Image URLs from design guidelines
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1774685110718-c5b4fe026144?w=1920",
  interior1: "https://images.unsplash.com/photo-1760072513442-9872656c1b07?w=800",
  interior2: "https://images.unsplash.com/photo-1757262798620-c2cc40cfb440?w=800",
  exterior1: "https://images.unsplash.com/photo-1766603636700-e9d80473f40f?w=800",
  exterior2: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=800",
  blueprint: "https://images.unsplash.com/photo-1772442198624-4fc4d7281e89?w=800",
  blueprintDetail: "https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?w=800",
  concrete: "https://images.unsplash.com/photo-1633319987325-aae32f3d8dd3?w=800",
  charlotte: "https://images.unsplash.com/photo-1582555645330-9fa5f195e1ca?w=1200",
};

// Services data
const services = [
  { icon: Home, title: "Custom Home Building", description: "Bespoke luxury homes designed and built to your exact specifications, from foundation to finishing touches." },
  { icon: Building2, title: "Turnkey Homes", description: "Move-in ready homes built on your lot with premium finishes and stress-free project management." },
  { icon: Building2, title: "Commercial Construction", description: "Professional commercial spaces that reflect your brand and meet your business needs." },
  { icon: Hammer, title: "Remodeling", description: "Transform your existing space with expert renovations that blend modern design with timeless craftsmanship." },
  { icon: Home, title: "ADU Construction", description: "Accessory dwelling units that maximize your property's potential and value." },
  { icon: Plus, title: "Home Additions", description: "Seamlessly expand your living space with additions that complement your home's architecture." },
  { icon: Building2, title: "Residential Development", description: "End-to-end development services for multi-unit residential projects." }
];

// Why choose us data
const whyChooseUs = [
  { icon: Award, title: "20+ Years Experience", description: "Two decades of excellence in the US & Europe" },
  { icon: PenTool, title: "Full-Service", description: "Design → Permits → Build, all under one roof" },
  { icon: DollarSign, title: "Transparent Pricing", description: "No hidden costs, no surprises" },
  { icon: Shield, title: "High-End Craftsmanship", description: "Premium materials and meticulous attention to detail" },
  { icon: Users, title: "Client-Focused", description: "Your vision drives every decision we make" }
];

// Process steps
const processSteps = [
  { number: "01", title: "Suitability", description: "We assess your project requirements, budget, and timeline to ensure we're the right fit." },
  { number: "02", title: "Design", description: "Collaborative design process to bring your vision to life with detailed plans and 3D renderings." },
  { number: "03", title: "Permits", description: "We handle all permits and approvals, navigating regulations so you don't have to." },
  { number: "04", title: "Build", description: "Expert construction with regular updates, quality checkpoints, and on-time delivery." }
];

// Service areas
const serviceAreas = ["Charlotte", "Matthews", "Huntersville", "Belmont", "Concord", "Lake Norman", "SouthPark", "Myers Park", "Ballantyne", "Waxhaw"];

// Testimonials
const testimonials = [
  { name: "David & Sarah Mitchell", project: "Custom Home, Lake Norman", text: "Canelli Construction exceeded every expectation. Our lakefront home is a masterpiece—their attention to detail and communication throughout was exceptional.", rating: 5 },
  { name: "Michael Chen", project: "Commercial Build, South End", text: "Professional, transparent, and delivered on time. Our office building has received countless compliments. A true partner in our vision.", rating: 5 },
  { name: "Jennifer & Robert Walsh", project: "Home Renovation, Dilworth", text: "They transformed our 1920s home into a modern sanctuary while preserving its character. The craftsmanship is simply outstanding.", rating: 5 },
  { name: "The Morrison Family", project: "ADU Construction, Myers Park", text: "Our ADU was completed ahead of schedule and the quality is indistinguishable from the main house. Highly recommend!", rating: 5 }
];

// Header Component
const Header = ({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = ['About', 'Services', 'Portfolio', 'Process', 'Contact'];
  
  return (
    <header 
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-header' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" data-testid="logo" className="flex items-center gap-3">
            <div className="text-2xl font-black tracking-tighter uppercase">
              <span className="text-white">Canelli</span>
              <span className="text-gold ml-1">.</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                data-testid={`nav-${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={PHONE_HREF} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {PHONE_NUMBER}
            </a>
            <a
              href="#contact"
              data-testid="header-cta"
              className="btn-gold px-6 py-3 text-sm"
            >
              Get a Quote
            </a>
          </div>

          <button
            data-testid="mobile-menu-btn"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div data-testid="mobile-menu" className="lg:hidden bg-[#0A0A0A] border-t border-zinc-800 py-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-white font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#contact" className="mx-4 btn-gold px-6 py-3 text-center">
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => (
  <section id="hero" data-testid="hero-section" className="relative h-screen flex items-center">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
    <div className="absolute inset-0 hero-overlay" />
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
      <div className="max-w-3xl">
        <p className="overline mb-6 animate-fade-in-up opacity-0 stagger-1">Charlotte's Premier Builder</p>
        <h1 data-testid="hero-headline" className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-white leading-none mb-6 animate-fade-in-up opacity-0 stagger-2">
          Building Charlotte's Finest Homes & Spaces
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl animate-fade-in-up opacity-0 stagger-3">
          Custom homes, commercial construction, and renovations built with precision and transparency.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up opacity-0 stagger-4">
          <a href="#contact" data-testid="hero-quote-btn" className="btn-gold px-8 py-4 text-lg flex items-center justify-center gap-2">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#portfolio" data-testid="hero-portfolio-btn" className="btn-ghost px-8 py-4 text-lg flex items-center justify-center gap-2">
            View Portfolio
          </a>
        </div>
        
        <div className="flex flex-wrap gap-8 text-sm text-zinc-400 animate-fade-in-up opacity-0 stagger-5">
          <span className="flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> 20+ Years Experience</span>
          <span className="flex items-center gap-2"><PenTool className="w-4 h-4 text-gold" /> Full-Service Design & Build</span>
          <span className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-gold" /> Transparent Pricing</span>
        </div>
      </div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="about" data-testid="about-section" className="py-24 md:py-32 bg-[#0A0A0A]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={IMAGES.blueprint} alt="Blueprint review" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[#D4AF37] text-black p-8">
            <div className="number-display text-6xl">20+</div>
            <div className="text-sm uppercase tracking-wider mt-1 font-semibold">Years Excellence</div>
          </div>
        </div>
        
        <div>
          <p className="overline mb-4">Our Story</p>
          <h2 data-testid="about-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Crafting Excellence Since 2004
          </h2>
          <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
            With over two decades of experience spanning Europe and the United States, Canelli Construction has built a reputation for uncompromising quality and transparent partnerships.
          </p>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            We believe every project tells a story. Our family-focused, client-first approach means your vision becomes our mission. No upselling, no hidden agendas—just exceptional craftsmanship delivered with integrity.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {["Transparent Communication", "Premium Materials", "On-Time Delivery", "Client-First Approach"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Services Section
const ServicesSection = () => (
  <section id="services" data-testid="services-section" className="py-24 md:py-32 bg-[#141414]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="overline mb-4">What We Build</p>
        <h2 data-testid="services-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Comprehensive Construction Services
        </h2>
        <p className="text-lg text-zinc-400">
          From concept to completion, we deliver excellence across every project type.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} data-testid={`service-card-${i}`} className="service-card p-8 group">
            <div className="service-icon w-14 h-14 bg-[#1E1E1E] border border-zinc-800 flex items-center justify-center mb-6 transition-all duration-300">
              <service.icon className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:gap-3 transition-all">
              Get Quote <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Portfolio Section
const PortfolioSection = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // First seed projects if needed
        await axios.post(`${API}/projects/seed`).catch(() => {});
        // Then fetch
        const response = await axios.get(`${API}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="overline mb-4">Our Work</p>
          <h2 data-testid="portfolio-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-400">
            Explore our portfolio of custom homes, commercial builds, and renovations.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="flex justify-center gap-2 mb-12 bg-transparent">
            {["all", "residential", "commercial", "adu", "remodel"].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab}
                data-testid={`portfolio-tab-${tab}`}
                className="px-6 py-3 text-sm font-medium capitalize data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black text-zinc-400 hover:text-white transition-colors"
              >
                {tab === "all" ? "All Projects" : tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            {loading ? (
              <div className="text-center text-zinc-400 py-12">Loading projects...</div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center text-zinc-400 py-12">No projects found</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, i) => (
                  <div key={project.id} data-testid={`portfolio-card-${i}`} className="portfolio-card aspect-[4/3] cursor-pointer">
                    <img src={project.image_url} alt={project.title} className="portfolio-image w-full h-full object-cover" />
                    <div className="portfolio-overlay">
                      <p className="overline mb-2">{project.category}</p>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-zinc-400">{project.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseSection = () => (
  <section id="why-us" data-testid="why-us-section" className="py-24 md:py-32 bg-[#141414]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="overline mb-4">Why Canelli</p>
        <h2 data-testid="why-us-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          The Canelli Difference
        </h2>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {whyChooseUs.map((item, i) => (
          <div key={i} data-testid={`why-card-${i}`} className="text-center">
            <div className="w-16 h-16 mx-auto bg-[#1E1E1E] border border-zinc-800 flex items-center justify-center mb-4">
              <item.icon className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Process Section
const ProcessSection = () => (
  <section id="process" data-testid="process-section" className="py-24 md:py-32 bg-[#0A0A0A]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="overline mb-4">Our Process</p>
        <h2 data-testid="process-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          How We Work
        </h2>
        <p className="text-lg text-zinc-400">
          A streamlined, transparent process from initial consultation to final walkthrough.
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8">
        {processSteps.map((step, i) => (
          <div key={i} data-testid={`process-step-${i}`} className="process-step text-center">
            <div className="number-display text-6xl mb-4">{step.number}</div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Service Area Section
const ServiceAreaSection = () => (
  <section id="service-area" data-testid="service-area-section" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.charlotte})` }} />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
      <div className="max-w-2xl">
        <p className="overline mb-4">Service Area</p>
        <h2 data-testid="service-area-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Proudly Serving Charlotte & Beyond
        </h2>
        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
          We serve the greater Charlotte metropolitan area and surrounding communities in North Carolina.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {serviceAreas.map((area, i) => (
            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm">
              {area}
            </span>
          ))}
        </div>
        
        <a href="#contact" className="btn-gold px-8 py-4 inline-flex items-center gap-2">
          <MapPin className="w-5 h-5" /> Contact for Service
        </a>
      </div>
    </div>
  </section>
);

// Feature Section (Turnkey + ADU)
const FeatureSection = () => (
  <section data-testid="feature-section" className="py-24 md:py-32 bg-[#141414]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="feature-card p-10 lg:p-12">
          <p className="overline mb-4">Stress-Free Building</p>
          <h3 className="text-3xl font-bold text-white mb-4">Turnkey Homes</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Dream of a custom home without the hassle? Our turnkey process handles everything—from design and permits to construction and finishing—so you can focus on the excitement of your new home.
          </p>
          <a href="#contact" className="btn-gold px-6 py-3 inline-flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="feature-card p-10 lg:p-12">
          <p className="overline mb-4">Maximize Your Property</p>
          <h3 className="text-3xl font-bold text-white mb-4">ADU Construction</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Accessory Dwelling Units are the fastest-growing housing trend. Add rental income, guest space, or a home office with a premium ADU built to match your property's aesthetic.
          </p>
          <a href="#contact" className="btn-gold px-6 py-3 inline-flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section id="testimonials" data-testid="testimonials-section" className="py-24 md:py-32 bg-[#0A0A0A]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="overline mb-4">Testimonials</p>
        <h2 data-testid="testimonials-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Client Stories
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} data-testid={`testimonial-card-${i}`} className="testimonial-card p-8">
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <p className="text-xl text-white mb-6 leading-relaxed font-light">"{t.text}"</p>
            <div>
              <div className="font-bold text-white">{t.name}</div>
              <div className="text-sm text-zinc-500">{t.project}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Estimator Section
const EstimatorSection = () => {
  const [projectType, setProjectType] = useState("custom_home");
  const [squareFeet, setSquareFeet] = useState([2500]);
  const [finishLevel, setFinishLevel] = useState("premium");
  const [estimate, setEstimate] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculateEstimate = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API}/estimate`, {
        project_type: projectType,
        square_feet: squareFeet[0],
        finish_level: finishLevel
      });
      setEstimate(response.data);
    } catch (error) {
      console.error('Error calculating estimate:', error);
      toast.error("Error calculating estimate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimator" data-testid="estimator-section" className="py-24 md:py-32 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="overline mb-4">Planning Tool</p>
            <h2 data-testid="estimator-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              New Construction Calculator
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Get a rough estimate for your project based on size and type. This tool provides ballpark figures to help with initial planning.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              <Calculator className="w-6 h-6 text-[#D4AF37]" />
              <span>Instant estimates • No obligation</span>
            </div>
          </div>
          
          <div className="estimator-container p-8 lg:p-10">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-white mb-3">Project Type</label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger data-testid="estimator-project-type" className="w-full bg-[#1E1E1E] border-zinc-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1E1E1E] border-zinc-700">
                    <SelectItem value="custom_home">Custom Home</SelectItem>
                    <SelectItem value="turnkey">Turnkey Home</SelectItem>
                    <SelectItem value="remodel">Remodel</SelectItem>
                    <SelectItem value="adu">ADU</SelectItem>
                    <SelectItem value="addition">Home Addition</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Square Footage: <span className="text-[#D4AF37]">{squareFeet[0].toLocaleString()} sq ft</span>
                </label>
                <Slider
                  data-testid="estimator-sqft"
                  value={squareFeet}
                  onValueChange={setSquareFeet}
                  min={500}
                  max={10000}
                  step={100}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-3">Finish Level</label>
                <Select value={finishLevel} onValueChange={setFinishLevel}>
                  <SelectTrigger data-testid="estimator-finish" className="w-full bg-[#1E1E1E] border-zinc-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1E1E1E] border-zinc-700">
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <button
                onClick={calculateEstimate}
                disabled={loading}
                data-testid="estimator-calculate-btn"
                className="w-full btn-gold py-4 text-lg font-semibold"
              >
                {loading ? 'Calculating...' : 'Calculate Estimate'}
              </button>
              
              {estimate && (
                <div data-testid="estimator-result" className="mt-6 p-6 bg-[#0A0A0A] border border-zinc-800">
                  <p className="text-sm text-zinc-400 mb-2">Estimated Range</p>
                  <p className="text-3xl font-bold text-[#D4AF37]">
                    ${estimate.estimated_low.toLocaleString()} - ${estimate.estimated_high.toLocaleString()}
                  </p>
                  <p className="text-xs text-zinc-500 mt-4">{estimate.disclaimer}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section data-testid="cta-section" className="py-24 md:py-32 bg-[#0A0A0A] border-y border-zinc-800">
    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-white mb-6">
        From Vision to Reality
      </h2>
      <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
        Let's build something exceptional together. Whether it's a custom home, commercial space, or renovation—we're ready when you are.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" data-testid="cta-quote-btn" className="btn-gold px-10 py-5 text-lg flex items-center justify-center gap-2">
          Get a Free Quote <ArrowRight className="w-5 h-5" />
        </a>
        <a href={PHONE_HREF} className="btn-ghost px-10 py-5 text-lg flex items-center justify-center gap-2">
          <Phone className="w-5 h-5" /> {PHONE_NUMBER}
        </a>
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', project_type: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Thank you! We'll be in touch shortly.");
      setFormData({ name: '', phone: '', email: '', project_type: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="overline mb-4">Get In Touch</p>
            <h2 data-testid="contact-headline" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Let's Build Together
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Ready to start your project? Fill out the form or reach out directly. We respond to all inquiries within 24 hours.
            </p>
            
            <div className="space-y-6">
              <a href={PHONE_HREF} data-testid="contact-phone" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-[#1E1E1E] border border-zinc-800 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Call Us</div>
                  <div className="text-xl font-bold text-white">{PHONE_NUMBER}</div>
                </div>
              </a>
              
              <a href={`mailto:${EMAIL}`} data-testid="contact-email" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-[#1E1E1E] border border-zinc-800 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Email Us</div>
                  <div className="text-xl font-bold text-white">{EMAIL}</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#1E1E1E] border border-zinc-800 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Location</div>
                  <div className="text-xl font-bold text-white">Charlotte, NC</div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-10 aspect-video">
              <iframe
                title="Canelli Construction Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208477.3910823091!2d-80.97608799999999!3d35.2270869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-container"
              />
            </div>
          </div>
          
          <div className="bg-[#0A0A0A] border border-zinc-800 p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
            <p className="text-zinc-400 mb-8">Tell us about your project and we'll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <Input
                    data-testid="contact-form-name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-[#1E1E1E] border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone</label>
                  <Input
                    data-testid="contact-form-phone"
                    type="tel"
                    placeholder="(704) 555-1234"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-[#1E1E1E] border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <Input
                  data-testid="contact-form-email"
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-[#1E1E1E] border-zinc-700 text-white placeholder:text-zinc-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Project Type</label>
                <Select value={formData.project_type} onValueChange={(v) => setFormData({ ...formData, project_type: v })}>
                  <SelectTrigger data-testid="contact-form-project-type" className="w-full bg-[#1E1E1E] border-zinc-700 text-white">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1E1E1E] border-zinc-700">
                    <SelectItem value="custom_home">Custom Home</SelectItem>
                    <SelectItem value="turnkey">Turnkey Home</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="remodel">Remodeling</SelectItem>
                    <SelectItem value="adu">ADU Construction</SelectItem>
                    <SelectItem value="addition">Home Addition</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <Textarea
                  data-testid="contact-form-message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-[#1E1E1E] border-zinc-700 text-white placeholder:text-zinc-500 resize-none"
                />
              </div>
              
              <button
                type="submit"
                data-testid="contact-form-submit"
                disabled={isSubmitting}
                className="w-full btn-gold py-4 text-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer data-testid="footer" className="bg-[#0A0A0A] border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-black tracking-tighter uppercase mb-4">
              <span className="text-white">Canelli</span>
              <span className="text-[#D4AF37] ml-1">Construction</span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              Premium construction services in Charlotte, NC. Custom homes, commercial builds, and renovations delivered with excellence and transparency.
            </p>
            <div className="flex items-center gap-4">
              <a href={PHONE_HREF} className="text-[#D4AF37] font-semibold hover:text-white transition-colors">
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-zinc-400">
              {["Custom Homes", "Turnkey Homes", "Commercial", "Remodeling", "ADU Construction", "Home Additions"].map((s, i) => (
                <li key={i}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-zinc-400">
              {[{name: "About", href: "#about"}, {name: "Portfolio", href: "#portfolio"}, {name: "Process", href: "#process"}, {name: "Testimonials", href: "#testimonials"}, {name: "Contact", href: "#contact"}].map((l, i) => (
                <li key={i}><a href={l.href} className="hover:text-white transition-colors">{l.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-sm">
            © {year} Canelli Construction. All rights reserved.
          </div>
          <div className="text-zinc-500 text-sm">
            Charlotte, NC • Licensed & Insured
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App
function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App bg-[#0A0A0A]">
      <Toaster position="top-right" theme="dark" richColors />
      <Header isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <ProcessSection />
        <ServiceAreaSection />
        <FeatureSection />
        <TestimonialsSection />
        <EstimatorSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
