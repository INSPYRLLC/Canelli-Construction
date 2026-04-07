import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { PHONE, PHONE_HREF, EMAIL } from '../data/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', projectType: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Build Together</h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Ready to start your project? Fill out the form or reach out directly. We respond to all
              inquiries within 24 hours.
            </p>

            <div className="space-y-6 mb-10">
              <a href={PHONE_HREF} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-surface-secondary border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Call Us</div>
                  <div className="text-xl font-bold">{PHONE}</div>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-surface-secondary border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Email Us</div>
                  <div className="text-xl font-bold">{EMAIL}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-surface-secondary border border-border flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Location</div>
                  <div className="text-xl font-bold">Charlotte, NC</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208477.3910823091!2d-80.97608799999999!3d35.2270869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="map-filter"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-background border border-border p-8 lg:p-10">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold mb-2">Request a Free Quote</h3>
                <p className="text-zinc-400 mb-8">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface-secondary border border-border text-white p-3 placeholder:text-zinc-500 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="(704) 555-1234"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-surface-secondary border border-border text-white p-3 placeholder:text-zinc-500 focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-secondary border border-border text-white p-3 placeholder:text-zinc-500 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-surface-secondary border border-border text-white p-3 focus:border-primary focus:outline-none"
                    >
                      <option value="">Select project type</option>
                      <option value="custom_home">Custom Home</option>
                      <option value="turnkey">Turnkey Home</option>
                      <option value="commercial">Commercial</option>
                      <option value="remodel">Remodeling</option>
                      <option value="adu">ADU Construction</option>
                      <option value="addition">Home Addition</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-surface-secondary border border-border text-white p-3 placeholder:text-zinc-500 focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-background py-4 text-lg font-semibold hover:bg-primary-hover transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-16">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-xl">Thank you! We'll be in touch shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
