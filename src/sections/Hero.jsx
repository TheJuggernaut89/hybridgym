import { motion } from 'framer-motion';
import { Clock, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#c8ff00]/3 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hours Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <Clock className="w-4 h-4 text-[#c8ff00]" />
            <span className="text-white/60 text-sm">6 a.m - 10 p.m (Mon - Sun)</span>
          </motion.div>

          {/* Trusted Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c8ff00] to-[#a8d900] border-2 border-[#0a0a0a]"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-[#c8ff00] text-[#c8ff00]" />
              ))}
            </div>
            <span className="text-white/50 text-sm">Trusted by 100k+ clients</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.95] mb-8 tracking-tight"
          >
            Transform
            <br />
            <span className="text-[#c8ff00]">body and mind</span>
            <br />
            at hybrid
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            With ten years of experience in the health and wellness industry, our fitness solution continues to be a top option throughout the region.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#c8ff00] text-black font-semibold rounded-full hover:bg-[#d4ff33] transition-all duration-300 text-sm uppercase tracking-wider">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-wider">
              View Programs
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Image/Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
          alt="Gym Training"
          className="w-full h-full object-cover opacity-50"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
