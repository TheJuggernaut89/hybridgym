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
    <section ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-[#c8ff00] text-sm font-medium uppercase tracking-widest mb-6 block">
              All branches
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              We have{' '}
              <span className="text-[#c8ff00]">8 branches</span> across the United States for your convenience to choose the one closest to you.
            </h2>
          </motion.div>

          {/* Branch List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {branches.map((branch, index) => (
              <motion.div
                key={branch.city}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#c8ff00]/20 hover:bg-white/[0.03] transition-all duration-500 group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c8ff00] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold mb-1 group-hover:text-[#c8ff00] transition-colors duration-300">
                      Hybrid {branch.city}
                    </div>
                    <div className="text-white/40 text-sm">{branch.address}</div>
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
