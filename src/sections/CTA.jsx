import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#c8ff00] to-[#a8d900] p-10 md:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.1] mb-4">
                Free 7-day trial signup
              </h2>
              <p className="text-black/60 text-lg">
                Sign up for free 7-day trial with us and experience all of our services for free at Hybrid.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-black/80 transition-all duration-300 text-sm uppercase tracking-wider group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
