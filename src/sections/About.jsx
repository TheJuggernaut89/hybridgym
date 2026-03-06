import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const stats = [
    { value: '+100k', label: 'Clients' },
    { value: '50+', label: 'Expert trainers' },
    { value: '8', label: 'Branches' },
    { value: '10', label: 'Year of experience' },
  ];

  return (
    <section ref={ref} className="py-28 bg-[#0f0f0f] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] mb-8 tracking-[-0.02em]">
              Let&apos;s us Transform Your{' '}
              <span className="text-[#c8ff00]">Fitness Journey</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-10 max-w-md">
              We are a leading fitness system with 10 years of experience in the fitness industry and trusted by over 100,000 customers. Our mission is to help you achieve your fitness goals through world-class training and expert guidance.
            </p>
            <button className="px-8 py-3.5 bg-[#c8ff00] text-black font-medium rounded-full hover:bg-[#d4ff33] transition-colors duration-300 text-sm">
              Learn More
            </button>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                style={{ y: index % 2 === 0 ? y1 : y2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-center hover:border-[#c8ff00]/20 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl font-semibold text-[#c8ff00] mb-2 tracking-[-0.02em]">{stat.value}</div>
                <div className="text-white/30 text-xs uppercase tracking-[0.1em]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
