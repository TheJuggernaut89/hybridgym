import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Users, Calendar, Shield } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Trophy,
      title: 'World-Class Facility',
      description:
        '20,000 sq ft of premium training space with pro-grade mats, cages, and equipment.',
      color: '#FFD700',
    },
    {
      icon: Users,
      title: 'Expert Coaches',
      description:
        'Learn from active fighters and certified instructors with decades of combined experience.',
      color: '#00D9FF',
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      description:
        'Classes from 6 AM to 10 PM. Train on your time with over 50 classes per week.',
      color: '#39FF14',
    },
    {
      icon: Shield,
      title: 'Community Focus',
      description:
        'Join a supportive community that pushes each other to be better every single day.',
      color: '#FF3B30',
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="section section-alt relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-6"
          >
            Why Hybrid Combative?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-[#FF3B30] mx-auto"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                <div className="card p-8 h-full flex flex-col items-center text-center hover:border-[#FF3B30]/50 transition-colors duration-300">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: feature.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl text-white uppercase tracking-wide mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${feature.color}10 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-[#FF3B30]/20 via-[#FF3B30]/10 to-[#FF3B30]/20 rounded-2xl p-8 md:p-12 border border-[#FF3B30]/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-4xl md:text-5xl text-[#FFD700] mb-2">
                20K
              </div>
              <div className="text-[#9CA3AF] text-sm uppercase tracking-wider">
                Square Feet
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl text-[#00D9FF] mb-2">
                50+
              </div>
              <div className="text-[#9CA3AF] text-sm uppercase tracking-wider">
                Weekly Classes
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl text-[#39FF14] mb-2">
                6AM
              </div>
              <div className="text-[#9CA3AF] text-sm uppercase tracking-wider">
                Opening Time
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl text-[#FF3B30] mb-2">
                10PM
              </div>
              <div className="text-[#9CA3AF] text-sm uppercase tracking-wider">
                Closing Time
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
