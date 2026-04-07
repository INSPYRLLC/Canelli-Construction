import { PHONE, PHONE_HREF } from '../data/constants';

const SERVICES = ['Custom Homes', 'Turnkey Homes', 'Commercial', 'Remodeling', 'ADU Construction', 'Home Additions'];
const LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-black tracking-tighter uppercase mb-4">
              Canelli <span className="text-primary">Construction</span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              Premium construction services in Charlotte, NC. Custom homes, commercial builds, and
              renovations delivered with excellence and transparency.
            </p>
            <a href={PHONE_HREF} className="text-primary font-semibold hover:text-white transition-colors">
              {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {LINKS.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">© {year} Canelli Construction. All rights reserved.</p>
          <p className="text-zinc-500 text-sm">Charlotte, NC • Licensed & Insured</p>
        </div>
      </div>
    </footer>
  );
}
