import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What people <span className="text-[#c8ff00]">say</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-[#c8ff00]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Quote className="w-8 h-8 text-[#c8ff00]" />
            </div>

            {/* Quote */}
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-8">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-white font-semibold">{testimonials[activeIndex].name}</div>
                <div className="text-white/50 text-sm">{testimonials[activeIndex].role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#c8ff00] hover:text-black hover:border-[#c8ff00] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
