import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Transformations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      name: 'Marcus',
      age: 32,
      duration: '24 weeks',
      before: { weight: '95 kg', bodyFat: '28%' },
      after: { weight: '78 kg', bodyFat: '12%' },
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    },
    {
      name: 'Jennifer',
      age: 28,
      duration: '36 weeks',
      before: { weight: '75 kg', bodyFat: '32%' },
      after: { weight: '58 kg', bodyFat: '18%' },
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    },
    {
      name: 'David',
      age: 35,
      duration: '16 weeks',
      before: { weight: '110 kg', bodyFat: '35%' },
      after: { weight: '88 kg', bodyFat: '15%' },
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&q=80',
    },
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Let&apos;s see our students
            <br />
            <span className="text-[#c8ff00]">have transformed</span>
          </h2>
        </motion.div>

        {/* Transformation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src={transformations[activeIndex].image}
                  alt={transformations[activeIndex].name}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-[#c8ff00] text-black px-4 py-2 rounded-full text-sm font-semibold">
                  {transformations[activeIndex].duration}
                </div>
              </div>

              {/* Stats */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <div className="text-white/50 text-sm">Name:</div>
                    <div className="text-white text-xl font-semibold">{transformations[activeIndex].name}</div>
                  </div>
                  <div className="w-px h-10 bg-white/20" />
                  <div>
                    <div className="text-white/50 text-sm">Age:</div>
                    <div className="text-white text-xl font-semibold">{transformations[activeIndex].age}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Before */}
                  <div className="bg-white/5 rounded-2xl p-6">
                    <div className="text-white/50 text-sm mb-4">Before</div>
                    <div className="mb-3">
                      <div className="text-3xl font-bold text-white">{transformations[activeIndex].before.weight}</div>
                      <div className="text-white/50 text-sm">Weight</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{transformations[activeIndex].before.bodyFat}</div>
                      <div className="text-white/50 text-sm">Body fat</div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-[#c8ff00]/10 border border-[#c8ff00]/30 rounded-2xl p-6">
                    <div className="text-[#c8ff00] text-sm mb-4">After</div>
                    <div className="mb-3">
                      <div className="text-3xl font-bold text-[#c8ff00]">{transformations[activeIndex].after.weight}</div>
                      <div className="text-white/50 text-sm">Weight</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#c8ff00]">{transformations[activeIndex].after.bodyFat}</div>
                      <div className="text-white/50 text-sm">Body fat</div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2">
                    {transformations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeIndex ? 'w-8 bg-[#c8ff00]' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transformations;
