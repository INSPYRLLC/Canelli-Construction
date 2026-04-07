import { ArrowRight } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-surface border border-border p-10 lg:p-12 hover:border-primary transition-colors">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Stress-Free Building
            </p>
            <h3 className="text-3xl font-bold mb-4">Turnkey Homes</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Dream of a custom home without the hassle? Our turnkey process handles everything—from
              design and permits to construction and finishing—so you can focus on the excitement
              of your new home.
            </p>
            <a
              href="#contact"
              className="bg-primary text-background px-6 py-3 font-semibold inline-flex items-center gap-2 hover:bg-primary-hover transition-all"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-surface border border-border p-10 lg:p-12 hover:border-primary transition-colors">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Maximize Your Property
            </p>
            <h3 className="text-3xl font-bold mb-4">ADU Construction</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Accessory Dwelling Units are the fastest-growing housing trend. Add rental income,
              guest space, or a home office with a premium ADU built to match your property's aesthetic.
            </p>
            <a
              href="#contact"
              className="bg-primary text-background px-6 py-3 font-semibold inline-flex items-center gap-2 hover:bg-primary-hover transition-all"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
