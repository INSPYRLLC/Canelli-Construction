import { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/constants';

const TABS = ['all', 'residential', 'commercial', 'adu', 'remodel'];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects =
    activeTab === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Featured Projects</h2>
          <p className="text-lg text-zinc-400">
            Explore our portfolio of custom homes, commercial builds, and renovations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium capitalize transition-all ${
                activeTab === tab
                  ? 'bg-primary text-background'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {tab === 'all' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-zinc-400">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
