import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PHONE, PHONE_HREF } from '../data/constants';

const NAV_ITEMS = ['About', 'Services', 'Portfolio', 'Process', 'Contact'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-black tracking-tighter uppercase">
            Canelli<span className="text-primary ml-0.5">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={PHONE_HREF} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {PHONE}
            </a>
            <a
              href="#contact"
              className="bg-primary text-background px-6 py-3 text-sm font-semibold hover:bg-primary-hover transition-all hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-zinc-800 py-6">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-3 text-white font-medium hover:bg-surface"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="mx-4 mt-2 bg-primary text-background px-6 py-3 text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
