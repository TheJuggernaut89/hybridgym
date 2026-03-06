import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Branches = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const branches = [
    { city: 'New York', address: '159 Pioneer St, Brooklyn' },
    { city: 'Washington', address: '2801 14th St NW, Washington' },
    { city: 'California', address: '28345 Industrial Blvd, Hayward' },
    { city: 'Montana', address: '1921 Wichman Rd, Moore' },
    { city: 'Arizona', address: '2043 S 3rd Dr, Phoenix' },
    { city: 'New Mexico', address: 'HC 77 Box 1A, Budville' },
    { city: 'Colorado', address: '1050 W Hampden Ave Ste 100' },
    { city: 'Texas', address: 'V368+53 Las Colinas, Irving' },
  ];

  return (
    <section ref={ref} className="py-28 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#c8ff00] text-sm font-medium uppercase tracking-[0.15em] mb-4 block">
              All branches
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-[-0.02em]">
              We have{' '}
              <span className="text-[#c8ff00]">8 branches</span> across the United States for your convenience to choose the one closest to you.
            </h2>
          </motion.div>

          {/* Branch List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {branches.map((branch, index) => (
              <motion.div
                key={branch.city}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:border-[#c8ff00]/20 hover:bg-white/[0.03] transition-all duration-500 group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c8ff00] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium text-sm mb-0.5 group-hover:text-[#c8ff00] transition-colors duration-300">
                      Hybrid {branch.city}
                    </div>
                    <div className="text-white/30 text-xs">{branch.address}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
