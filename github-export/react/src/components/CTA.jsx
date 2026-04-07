import { ArrowRight, Phone } from 'lucide-react';
import { PHONE, PHONE_HREF } from '../data/constants';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6">
          From Vision to Reality
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Let's build something exceptional together. Whether it's a custom home, commercial space, or
          renovation—we're ready when you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-primary text-background px-10 py-5 text-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-hover transition-all"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={PHONE_HREF}
            className="border border-primary text-white px-10 py-5 text-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-background transition-all"
          >
            <Phone className="w-5 h-5" /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
