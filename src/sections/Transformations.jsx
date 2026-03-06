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

  const current = transformations[activeIndex];

  return (
    <section ref={ref} className="py-28 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-[-0.02em]">
            Let&apos;s see our students
            <br />
            <span className="text-[#c8ff00]">have transformed</span>
          </h2>
        </motion.div>

        {/* Transformation Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl"
                  />
                  <div className="absolute top-4 left-4 bg-[#c8ff00] text-black px-4 py-2 rounded-full text-sm font-medium">
                    {current.duration}
                  </div>
                </div>

                {/* Stats */}
                <div>
                  {/* Name & Age */}
                  <div className="flex items-center gap-8 mb-8">
                    <div>
                      <div className="text-white/30 text-xs uppercase tracking-[0.1em] mb-1">Name:</div>
                      <div className="text-white text-2xl font-medium">{current.name}</div>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <div>
                      <div className="text-white/30 text-xs uppercase tracking-[0.1em] mb-1">Age:</div>
                      <div className="text-white text-2xl font-medium">{current.age}</div>
                    </div>
                  </div>

                  {/* Before & After Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Before */}
                    <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.05]">
                      <div className="text-white/30 text-xs uppercase tracking-[0.1em] mb-4">Before</div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-medium text-white">{current.before.weight}</span>
                            <span className="text-white/30 text-sm">kg</span>
                          </div>
                          <div className="text-white/30 text-xs">Weight</div>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-medium text-white">{current.before.bodyFat}</span>
                            <span className="text-white/30 text-sm">%</span>
                          </div>
                          <div className="text-white/30 text-xs">Body fat</div>
                        </div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-[#c8ff00]/[0.08] rounded-2xl p-5 border border-[#c8ff00]/20">
                      <div className="text-[#c8ff00] text-xs uppercase tracking-[0.1em] mb-4">After</div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-medium text-[#c8ff00]">{current.after.weight}</span>
                            <span className="text-[#c8ff00]/50 text-sm">kg</span>
                          </div>
                          <div className="text-white/30 text-xs">Weight</div>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-medium text-[#c8ff00]">{current.after.bodyFat}</span>
                            <span className="text-[#c8ff00]/50 text-sm">%</span>
                          </div>
                          <div className="text-white/30 text-xs">Body fat</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="flex gap-6 mb-8">
                    <span className="text-white/30 text-sm">Before</span>
                    <span className="text-[#c8ff00] text-sm">after</span>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-11 h-11 bg-white/[0.03] border border-white/[0.08] rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                      {transformations.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'w-6 bg-[#c8ff00]' : 'w-1.5 bg-white/20 hover:bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={next}
                      className="w-11 h-11 bg-white/[0.03] border border-white/[0.08] rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
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
