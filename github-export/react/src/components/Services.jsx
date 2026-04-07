import { Home, Building2, Hammer, Plus, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/constants';

const iconMap = {
  Home,
  Building2,
  Hammer,
  Plus,
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Comprehensive Construction Services
          </h2>
          <p className="text-lg text-zinc-400">
            From concept to completion, we deliver excellence across every project type.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={i}
                className="group bg-surface border border-border p-8 transition-all duration-500 hover:border-primary hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50"
              >
                <div className="w-14 h-14 bg-surface-secondary border border-border flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary">
                  <Icon className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Get Quote <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
