import { Instagram, Facebook, Youtube, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/[0.05]">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-semibold text-white mb-4 tracking-tight">
              Hybrid<span className="text-[#c8ff00]">Gym</span>
            </div>
            <p className="text-white/30 mb-6 max-w-sm text-sm leading-relaxed">
              Forge your fighting spirit. World-class MMA training in a facility built for champions.
            </p>
            <div className="flex gap-2">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 bg-white/[0.03] border border-white/[0.05] rounded-full flex items-center justify-center text-white/30 hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Programs', 'Trainers', 'Schedule', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/30 hover:text-[#c8ff00] transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-white/30 text-sm">
              <li>123 Fighter&apos;s Way</li>
              <li>Combat City, CC 12345</li>
              <li>(555) 123-4567</li>
              <li>info@hybridgym.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2025 Hybrid Gym. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/20">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 bg-white/[0.03] border border-white/[0.05] rounded-full flex items-center justify-center text-white/30 hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
