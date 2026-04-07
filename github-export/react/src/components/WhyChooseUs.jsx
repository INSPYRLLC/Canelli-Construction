import { Award, PenTool, DollarSign, Shield, Users } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/constants';

const iconMap = { Award, PenTool, DollarSign, Shield, Users };

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Why Canelli</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Canelli Difference</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-surface-secondary border border-border flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
