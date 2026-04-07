import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import ServiceArea from './components/ServiceArea';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Estimator from './components/Estimator';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <ServiceArea />
        <Features />
        <Testimonials />
        <Estimator />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
