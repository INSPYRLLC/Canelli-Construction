import { PROCESS_STEPS } from '../data/constants';

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How We Work</h2>
          <p className="text-lg text-zinc-400">
            A streamlined, transparent process from initial consultation to final walkthrough.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-6xl font-black text-primary leading-none mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
