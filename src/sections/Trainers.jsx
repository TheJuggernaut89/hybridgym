import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Trainers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const trainers = [
    {
      name: 'Alex Thompson',
      role: 'Head MMA Coach',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop',
    },
    {
      name: 'Maria Santos',
      role: 'BJJ Instructor',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop',
    },
    {
      name: 'Kai Nakamura',
      role: 'Muay Thai Coach',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop',
    },
    {
      name: 'David O\'Connor',
      role: 'Boxing Coach',
      image: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=600&h=800&fit=crop',
    },
  ];

  return (
    <section ref={ref} id="trainers" className="py-28 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#c8ff00] text-sm font-medium uppercase tracking-[0.15em] mb-4 block">
              Expert trainers
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] mb-6 tracking-[-0.02em]">
              Achieve your fitness goals with our experienced and passionate trainers at{' '}
              <span className="text-[#c8ff00]">hybrid</span>.
            </h2>
            <p className="text-white/40 text-base mb-10 leading-relaxed max-w-md">
              Our team of certified professionals brings decades of combined experience in martial arts, fitness training, and personal coaching.
            </p>
            <button className="inline-flex items-center gap-2 text-[#c8ff00] font-medium hover:gap-3 transition-all duration-300 text-sm">
              View All Trainers <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Trainer Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-[280px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-medium text-base">{trainer.name}</div>
                  <div className="text-[#c8ff00] text-sm">{trainer.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
