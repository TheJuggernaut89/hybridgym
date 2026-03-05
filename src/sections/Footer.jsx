import { Instagram, Facebook, Youtube, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    programs: [
      { name: 'MMA Training', href: '#programs' },
      { name: 'Brazilian Jiu-Jitsu', href: '#programs' },
      { name: 'Muay Thai', href: '#programs' },
      { name: 'Boxing', href: '#programs' },
      { name: 'Kids Martial Arts', href: '#programs' },
    ],
    company: [
      { name: 'About Us', href: '#features' },
      { name: 'Coaches', href: '#coaches' },
      { name: 'Schedule', href: '#schedule' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
    ],
    legal: [
      { name: 'Membership Terms', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black relative">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <span className="font-heading text-3xl tracking-wider text-white">
                HYBRID
              </span>
              <span className="text-[#FF3B30] font-heading text-3xl tracking-wider">
                COMBATIVE
              </span>
            </a>
            <p className="text-[#9CA3AF] mb-6 max-w-sm">
              Forge Your Fighting Spirit. World-class MMA training in a facility
              built for champions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-[#141414] rounded-lg flex items-center justify-center text-[#9CA3AF] hover:bg-[#FF3B30] hover:text-white transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-heading text-white uppercase tracking-wider mb-6">
              Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#FF3B30] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-white uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#FF3B30] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-white uppercase tracking-wider mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#FF3B30] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#141414]">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm text-center md:text-left">
            © 2025 Hybrid Combative Gym. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#6B7280] text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF3B30] rounded-full animate-pulse" />
              123 Fighter&apos;s Way, Combat City, CC 12345
            </span>
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-[#141414] rounded-lg flex items-center justify-center text-[#9CA3AF] hover:bg-[#FF3B30] hover:text-white transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
