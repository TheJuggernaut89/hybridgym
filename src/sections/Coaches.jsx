import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Award, ArrowRight } from 'lucide-react';

const Coaches = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const coaches = [
    {
      name: 'Alex Thompson',
      title: 'Head MMA Coach',
      credentials: 'Former UFC Fighter | 15+ Years Coaching',
      bio: 'Former UFC welterweight with 15+ years of coaching experience. Specializes in fight IQ and strategic development.',
      image:
        'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop',
      specialties: ['MMA', 'Wrestling', 'Striking'],
    },
    {
      name: 'Maria Santos',
      title: 'BJJ Head Instructor',
      credentials: 'Black Belt 3rd Degree | IBJJF Champion',
      bio: 'Brazilian Jiu-Jitsu black belt with multiple IBJJF championships. Expert in both gi and no-gi grappling.',
      image:
        'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop',
      specialties: ['BJJ', 'Submissions', 'Self Defense'],
    },
    {
      name: 'Kai Nakamura',
      title: 'Muay Thai Coach',
      credentials: 'Former Lumpinee Champion | 200+ Fights',
      bio: 'Former Lumpinee Stadium champion from Thailand. Brings authentic Muay Thai technique and philosophy.',
      image:
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop',
      specialties: ['Muay Thai', 'Dutch Kickboxing', 'Clinch'],
    },
    {
      name: 'David O\'Connor',
      title: 'Boxing Coach',
      credentials: 'Former Olympic Boxer | Professional Trainer',
      bio: 'Olympic medalist turned professional coach. Develops champions with a focus on fundamentals and fight psychology.',
      image:
        'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=600&h=800&fit=crop',
      specialties: ['Boxing', 'Footwork', 'Defense'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section section-alt relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#0A0A0A]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#FF3B30] text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-6"
          >
            Meet Your Coaches
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto"
          >
            Learn from champions who&apos;ve competed at the highest levels
            of the sport.
          </motion.p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-[#0A0A0A] border border-[#2D2D2D] hover:border-[#FF3B30]/50 transition-all duration-300">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Credentials Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#FFD700]" />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h3 className="font-heading text-2xl text-white uppercase tracking-wide mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-[#FF3B30] text-sm font-semibold mb-2">
                    {coach.title}
                  </p>
                  <p className="text-[#9CA3AF] text-xs mb-3">
                    {coach.credentials}
                  </p>

                  {/* Bio - Shows on hover */}
                  <p className="text-[#D1D5DB] text-sm leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mb-4 line-clamp-3">
                    {coach.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {coach.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-[#FF3B30]/20 text-[#FF6B6B] text-xs rounded uppercase font-semibold"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <button className="flex items-center gap-2 text-white text-sm font-semibold hover:text-[#FF3B30] transition-colors">
                      View Profile
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-[#2D2D2D] rounded-full flex items-center justify-center text-white hover:bg-[#FF3B30] transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-[#9CA3AF] mb-4">
            Think you have what it takes to join our coaching team?
          </p>
          <button className="btn btn-secondary">
            Become a Coach
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Coaches;
