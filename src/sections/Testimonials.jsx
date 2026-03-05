import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Hybrid transformed me from a complete beginner to a confident competitor. The coaches genuinely care about your progress and push you to be your best every single day.",
      name: 'Marcus Johnson',
      title: 'Amateur Fighter, 2 years',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 5,
    },
    {
      quote:
        "Best facility in the city, hands down. The training atmosphere is electric and the technical instruction is world-class. I've trained all over the country and this place is special.",
      name: 'Sarah Chen',
      title: 'BJJ Purple Belt',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5,
    },
    {
      quote:
        "I came for fitness, stayed for the family. This gym has changed my life in every way possible. I've lost 40 pounds and gained confidence I never knew I had.",
      name: 'James Rodriguez',
      title: 'Member, 3 years',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0A0A0A, #141414)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] gradient-red-glow opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] gradient-red-glow opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#FF3B30] text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-6"
          >
            What Our Fighters Say
          </motion.h2>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#FF3B30]/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-[#FF3B30]" />
              </div>

              {/* Testimonial Card */}
              <div className="bg-[#141414] rounded-2xl p-8 md:p-12 border border-[#2D2D2D]">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FFD700] text-[#FFD700]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FF3B30]"
                  />
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-[#9CA3AF] text-sm">
                      {testimonials[activeIndex].title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-[#FF3B30]'
                      : 'bg-[#2D2D2D] hover:bg-[#404040]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-lg bg-[#141414] border border-[#2D2D2D] flex items-center justify-center text-white hover:bg-[#FF3B30] hover:border-[#FF3B30] transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-lg bg-[#141414] border border-[#2D2D2D] flex items-center justify-center text-white hover:bg-[#FF3B30] hover:border-[#FF3B30] transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-[#2D2D2D]"
        >
          <p className="text-center text-[#6B7280] text-sm uppercase tracking-widest mb-8">
            Trusted by fighters worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {['UFC', 'ONE Championship', 'Bellator', 'PFL', 'ADCC'].map((brand) => (
              <div
                key={brand}
                className="text-[#6B7280] font-heading text-xl uppercase tracking-wider"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
