import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '+100k', label: 'Clients' },
    { value: '50+', label: 'Expert trainers' },
    { value: '8', label: 'Branches' },
    { value: '10', label: 'Year of experience' },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Let&apos;s us Transform Your{' '}
              <span className="text-[#c8ff00]">Fitness Journey</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We are a leading fitness system with 10 years of experience in the fitness industry and trusted by over 100,000 customers. Our mission is to help you achieve your fitness goals through world-class training and expert guidance.
            </p>
            <button className="px-8 py-4 bg-[#c8ff00] text-black font-semibold rounded-full hover:bg-[#d4ff33] transition-all duration-300 text-sm uppercase tracking-wider">
              Learn More
            </button>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl text-center hover:border-[#c8ff00]/30 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#c8ff00] mb-2">{stat.value}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
