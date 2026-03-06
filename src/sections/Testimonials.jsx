import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Amazing gym! Knowledgeable trainers, top-notch facilities, fun classes. I've seen great results and love the hybrid community.",
      name: 'Angelia Jolie',
      role: 'Model',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
    {
      quote: "Overcame gym intimidation with hybrid's friendly atmosphere. Personalized training plan helped me reach my fitness goals. Feeling stronger and more confident!",
      name: 'Michael Field',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    {
      quote: "Tried many diets and workouts, but nothing worked like hybrid. Finally in the shape I've always wanted to be!",
      name: 'David Leo',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    },
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-28 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.02em]">
            What people <span className="text-[#c8ff00]">say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12 text-center">
              {/* Quote Mark */}
              <div className="text-5xl text-[#c8ff00]/30 font-serif mb-8 leading-none">"</div>

              {/* Quote */}
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
                {testimonials[activeIndex].quote}
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-white font-medium">{testimonials[activeIndex].name}</div>
                  <div className="text-white/30 text-sm">{testimonials[activeIndex].role}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 bg-white/[0.03] border border-white/[0.08] rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
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
                  className="w-10 h-10 bg-white/[0.03] border border-white/[0.08] rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
