import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const Facility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    'Modern facilities with full equipment',
    'Spacious and comfortable training space',
    'Showers and locker rooms',
    'Recovery and stretching area',
    'Smart lockers for your belongings',
    'Premium equipment and gear',
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                alt="Gym Facility"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              <span className="text-[#c8ff00]">5-star premium</span>
              <br />
              fitness center
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Modern facilities with full equipment. Spacious and comfortable space designed for serious training.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 bg-[#c8ff00]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#c8ff00]" />
                  </div>
                  <span className="text-white/60">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-4 bg-[#c8ff00] text-black font-semibold rounded-full hover:bg-[#d4ff33] transition-all duration-300 text-sm uppercase tracking-wider">
              Take a Tour
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
