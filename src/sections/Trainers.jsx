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
    <section ref={ref} id="trainers" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-[#c8ff00] text-sm font-medium uppercase tracking-widest mb-6 block">
              Expert trainers
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Achieve your fitness goals with our experienced and passionate trainers at{' '}
              <span className="text-[#c8ff00]">hybrid</span>.
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Our team of certified professionals brings decades of combined experience in martial arts, fitness training, and personal coaching.
            </p>
            <button className="inline-flex items-center gap-2 text-[#c8ff00] font-semibold hover:gap-4 transition-all duration-300">
              View All Trainers <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Trainer Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-semibold text-lg">{trainer.name}</div>
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
