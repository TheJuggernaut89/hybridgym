import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: '123 Fighter\'s Way, Combat City, CC 12345',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 123-4567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@hybridcombative.com',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 6AM-10PM | Sat: 8AM-6PM | Sun: Closed',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section section-alt relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#FF3B30] text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-6"
          >
            Start Your Training
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto"
          >
            Ready to transform your life? Reach out and let&apos;s get started.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-[#2D2D2D]">
              <h3 className="font-heading text-2xl text-white uppercase tracking-wide mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-[#9CA3AF] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#141414] border border-[#2D2D2D] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#FF3B30] focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#9CA3AF] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#141414] border border-[#2D2D2D] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#FF3B30] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#9CA3AF] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#141414] border border-[#2D2D2D] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#FF3B30] focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#9CA3AF] mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-[#141414] border border-[#2D2D2D] rounded-lg px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#FF3B30] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your goals..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-[#0A0A0A] rounded-xl border border-[#2D2D2D] hover:border-[#404040] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#FF3B30]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#FF3B30]" />
                  </div>
                  <div>
                    <div className="text-[#9CA3AF] text-sm mb-1">
                      {info.label}
                    </div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.div>
              );
            })}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="aspect-video bg-[#0A0A0A] rounded-xl border border-[#2D2D2D] overflow-hidden relative"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Location Map"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="btn btn-primary">
                  <MapPin className="mr-2 w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-center gap-4"
            >
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-12 h-12 bg-[#0A0A0A] border border-[#2D2D2D] rounded-lg flex items-center justify-center text-[#9CA3AF] hover:bg-[#FF3B30] hover:border-[#FF3B30] hover:text-white transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
