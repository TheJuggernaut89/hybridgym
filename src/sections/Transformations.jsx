import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Transformations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      name: 'David',
      age: 32,
      duration: '9 weeks',
      before: { weight: '84', bodyFat: '27' },
      after: { weight: '75', bodyFat: '15' },
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    },
    {
      name: 'Jimmy',
      age: 28,
      duration: '24 weeks',
      before: { weight: '80', bodyFat: '25' },
      after: { weight: '78', bodyFat: '12' },
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&q=80',
    },
    {
      name: 'Johnathan',
      age: 25,
      duration: '36 weeks',
      before: { weight: '85', bodyFat: '35' },
      after: { weight: '74', bodyFat: '15' },
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
            Let&apos;s see our students
            <br />
            <span className="text-[#c8ff00]">have transformed</span>
          </h2>
        </motion.div>

        {/* Transformation Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
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
                  {/* Name & Age */}
                  <div className="flex items-center gap-8 mb-8">
                    <div>
                      <div className="text-white/40 text-sm mb-1">Name:</div>
                      <div className="text-white text-2xl font-semibold">{transformations[activeIndex].name}</div>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <div>
                      <div className="text-white/40 text-sm mb-1">Age:</div>
                      <div className="text-white text-2xl font-semibold">{transformations[activeIndex].age}</div>
                    </div>
                  </div>

                  {/* Before & After Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {/* Before */}
                    <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5">
                      <div className="text-white/40 text-sm mb-6">Before</div>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-white">{transformations[activeIndex].before.weight}</span>
                          <span className="text-white/40 text-sm">kg</span>
                        </div>
                        <div className="text-white/40 text-sm">Weight</div>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-white">{transformations[activeIndex].before.bodyFat}</span>
                          <span className="text-white/40 text-sm">%</span>
                        </div>
                        <div className="text-white/40 text-sm">Body fat</div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-[#c8ff00]/5 rounded-2xl p-6 border border-[#c8ff00]/20">
                      <div className="text-[#c8ff00] text-sm mb-6">After</div>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-[#c8ff00]">{transformations[activeIndex].after.weight}</span>
                          <span className="text-[#c8ff00]/60 text-sm">kg</span>
                        </div>
                        <div className="text-white/40 text-sm">Weight</div>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-[#c8ff00]">{transformations[activeIndex].after.bodyFat}</span>
                          <span className="text-[#c8ff00]/60 text-sm">%</span>
                        </div>
                        <div className="text-white/40 text-sm">Body fat</div>
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="flex gap-4 mb-8">
                    <span className="text-white/40 text-sm">Before</span>
                    <span className="text-[#c8ff00] text-sm">after</span>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={prev}
                      className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                      {transformations.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'w-8 bg-[#c8ff00]' : 'w-2 bg-white/20 hover:bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={next}
                      className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Transformations;
