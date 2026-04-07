import { CheckCircle } from 'lucide-react';
import { IMAGES } from '../data/constants';

const FEATURES = ['Transparent Communication', 'Premium Materials', 'On-Time Delivery', 'Client-First Approach'];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={IMAGES.about} alt="Blueprint review" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-background p-8">
              <div className="text-6xl font-black leading-none">20+</div>
              <div className="text-sm uppercase tracking-wider mt-1 font-semibold">Years Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Crafting Excellence Since 2004
            </h2>
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              With over two decades of experience spanning Europe and the United States, Canelli Construction
              has built a reputation for uncompromising quality and transparent partnerships.
            </p>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              We believe every project tells a story. Our family-focused, client-first approach means your
              vision becomes our mission. No upselling, no hidden agendas—just exceptional craftsmanship
              delivered with integrity.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
