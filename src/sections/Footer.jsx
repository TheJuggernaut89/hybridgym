import { Instagram, Facebook, Youtube, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-white mb-4 tracking-tight">
              Hybrid<span className="text-[#c8ff00]">Gym</span>
            </div>
            <p className="text-white/40 mb-6 max-w-sm">
              Forge your fighting spirit. World-class MMA training in a facility built for champions.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/5 border border-white/5 rounded-full flex items-center justify-center text-white/40 hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Programs', 'Trainers', 'Schedule', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/40 hover:text-[#c8ff00] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/40">
              <li>123 Fighter&apos;s Way</li>
              <li>Combat City, CC 12345</li>
              <li>(555) 123-4567</li>
              <li>info@hybridgym.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2025 Hybrid Gym. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 border border-white/5 rounded-full flex items-center justify-center text-white/40 hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
