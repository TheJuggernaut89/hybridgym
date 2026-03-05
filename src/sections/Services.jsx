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
    <section ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-[#c8ff00] text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
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
                className="group p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.05] hover:border-[#c8ff00]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#c8ff00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c8ff00]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#c8ff00]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
