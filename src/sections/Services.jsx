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
    <section ref={ref} id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#c8ff00] text-sm font-medium uppercase tracking-widest mb-6 block"
          >
            Our services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Our services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            Hybrid offers 5 popular services to help you make comfortable choices that suit your needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-[#c8ff00]/20 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#c8ff00]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c8ff00]/10 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-[#c8ff00]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
