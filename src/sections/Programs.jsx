import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const programs = [
    {
      title: 'MMA Training',
      description:
        'Combine striking, wrestling, and submissions. The complete fighter\'s curriculum.',
      image:
        'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80',
      icon: '🥊',
    },
    {
      title: 'Brazilian Jiu-Jitsu',
      description:
        'Master the art of ground fighting. Technique and leverage over strength.',
      image:
        'https://images.unsplash.com/photo-1583467875263-d50385d246e0?w=800&q=80',
      icon: '🥋',
    },
    {
      title: 'Muay Thai',
      description:
        'The art of eight limbs. Devastating striking from all ranges.',
      image:
        'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80',
      icon: '🦶',
    },
    {
      title: 'Boxing',
      description:
        'The sweet science. Footwork, head movement, and precision.',
      image:
        'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
      icon: '👊',
    },
    {
      title: 'Kids Martial Arts',
      description:
        'Build confidence, discipline, and fitness. Ages 5-14 welcome.',
      image:
        'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800&q=80',
      icon: '🌟',
    },
  ];

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="section bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] gradient-red-glow opacity-20" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#FF3B30] text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Our Disciplines
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-6"
          >
            Train Like a Champion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto"
          >
            From striking to grappling, we offer comprehensive training programs
            for every aspect of mixed martial arts.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Card Background Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="font-heading text-2xl text-white uppercase tracking-wide mb-2">
                  {program.title}
                </h3>
                <p className="text-[#D1D5DB] text-sm mb-4 line-clamp-2">
                  {program.description}
                </p>
                <div className="flex items-center text-[#FF3B30] font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[#FF3B30] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn btn-secondary">
            View All Programs
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
