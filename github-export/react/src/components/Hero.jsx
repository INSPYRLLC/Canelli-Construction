import { Award, PenTool, DollarSign, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/constants';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6 animate-fade-up opacity-0 delay-1">
            Charlotte's Premier Builder
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-none mb-6 animate-fade-up opacity-0 delay-2">
            Building Charlotte's Finest Homes & Spaces
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl animate-fade-up opacity-0 delay-3">
            Custom homes, commercial construction, and renovations built with precision and transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up opacity-0 delay-4">
            <a
              href="#contact"
              className="bg-primary text-background px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="border border-primary text-white px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-background transition-all"
            >
              View Portfolio
            </a>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-zinc-400 animate-fade-up opacity-0 delay-4">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" /> 20+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <PenTool className="w-4 h-4 text-primary" /> Full-Service Design & Build
            </span>
            <span className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" /> Transparent Pricing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
