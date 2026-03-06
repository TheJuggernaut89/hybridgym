import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Facility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                alt="Gym Facility"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] mb-6 tracking-[-0.02em]">
              <span className="text-[#c8ff00]">5-star premium</span>
              <br />
              fitness center
            </h2>
            <p className="text-white/40 text-base mb-8 leading-relaxed max-w-md">
              Modern facilities with full equipment. Spacious and comfortable space.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {[
                'Modern facilities with full equipment.',
                'Spacious and comfortable space.',
                'Including showers, sauna & smart locker to enhance your post-exercise tranquility.',
                'Smart lockers keep your personal belongings safe and secure.'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#c8ff00] mt-1">•</span>
                  <span className="text-white/50 text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-3.5 bg-[#c8ff00] text-black font-medium rounded-full hover:bg-[#d4ff33] transition-colors duration-300 text-sm">
              Take a Tour
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
