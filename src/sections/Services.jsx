import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Heart, Flame, Users, Waves } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Dumbbell,
      title: 'MMA Training',
      description: 'Complete mixed martial arts training combining striking, grappling, and submissions.',
    },
    {
      icon: Heart,
      title: 'Brazilian Jiu-Jitsu',
      description: 'Master ground fighting with technique-focused gi and no-gi classes.',
    },
    {
      icon: Flame,
      title: 'Muay Thai',
      description: 'The art of eight limbs - devastating striking from all ranges.',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'High-energy group sessions for all fitness and skill levels.',
    },
    {
      icon: Waves,
      title: 'Boxing',
      description: 'Classic boxing training with focus on technique and conditioning.',
    },
  ];

  return (
    <section ref={ref} id="services" className="py-28 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header - StrongX Style */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mb-4"
          >
            <span className="text-[#c8ff00] text-sm font-medium uppercase tracking-[0.15em] block">
              Our services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-[-0.02em] mb-6"
          >
            Our services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/40 text-base max-w-md mx-auto leading-relaxed"
          >
            Hybrid offers 5 popular services to help you make comfortable choices that suit your needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="w-12 h-12 bg-[#c8ff00]/[0.08] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c8ff00]/[0.12] transition-colors duration-500">
                  <Icon className="w-6 h-6 text-[#c8ff00]" />
                </div>
                <h3 className="text-white font-medium text-base mb-2">{service.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
