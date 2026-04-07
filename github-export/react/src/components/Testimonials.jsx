import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Client Stories</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-surface border border-border p-8 transition-all hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl font-light leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-zinc-500">{t.project}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
