import { MapPin } from 'lucide-react';
import { IMAGES, SERVICE_AREAS } from '../data/constants';

export default function ServiceArea() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.charlotte})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Service Area</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Proudly Serving Charlotte & Beyond
          </h2>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            We serve the greater Charlotte metropolitan area and surrounding communities in North Carolina.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {SERVICE_AREAS.map((area, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-sm">
                {area}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="bg-primary text-background px-8 py-4 font-semibold inline-flex items-center gap-2 hover:bg-primary-hover transition-all"
          >
            <MapPin className="w-5 h-5" /> Contact for Service
          </a>
        </div>
      </div>
    </section>
  );
}
