import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { PRICE_RANGES } from '../data/constants';

export default function Estimator() {
  const [projectType, setProjectType] = useState('custom_home');
  const [squareFeet, setSquareFeet] = useState(2500);
  const [finishLevel, setFinishLevel] = useState('premium');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const range = PRICE_RANGES[projectType][finishLevel];
    const low = squareFeet * range[0];
    const high = squareFeet * range[1];
    setResult({ low, high });
  };

  return (
    <section id="estimator" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Planning Tool
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              New Construction Calculator
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Get a rough estimate for your project based on size and type. This tool provides
              ballpark figures to help with initial planning.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              <Calculator className="w-6 h-6 text-primary" />
              <span>Instant estimates • No obligation</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface to-surface-secondary border border-border p-8 lg:p-10">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-surface-secondary border border-border text-white p-3 focus:border-primary focus:outline-none"
                >
                  <option value="custom_home">Custom Home</option>
                  <option value="turnkey">Turnkey Home</option>
                  <option value="remodel">Remodel</option>
                  <option value="adu">ADU</option>
                  <option value="addition">Home Addition</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Square Footage: <span className="text-primary">{squareFeet.toLocaleString()} sq ft</span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={squareFeet}
                  onChange={(e) => setSquareFeet(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Finish Level</label>
                <select
                  value={finishLevel}
                  onChange={(e) => setFinishLevel(e.target.value)}
                  className="w-full bg-surface-secondary border border-border text-white p-3 focus:border-primary focus:outline-none"
                >
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              <button
                onClick={calculate}
                className="w-full bg-primary text-background py-4 text-lg font-semibold hover:bg-primary-hover transition-all"
              >
                Calculate Estimate
              </button>

              {result && (
                <div className="mt-6 p-6 bg-background border border-border">
                  <p className="text-sm text-zinc-400 mb-2">Estimated Range</p>
                  <p className="text-3xl font-bold text-primary">
                    ${result.low.toLocaleString()} - ${result.high.toLocaleString()}
                  </p>
                  <p className="text-xs text-zinc-500 mt-4">
                    This is a rough estimate only. Actual costs may vary based on specific project
                    requirements, site conditions, materials, and current market conditions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
