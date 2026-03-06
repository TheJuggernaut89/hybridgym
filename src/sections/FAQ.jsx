import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'I need consultation about the prices of Hybrid\'s services?',
      answer: 'We offer flexible membership options starting from $24/month. Our Gym plan is perfect for beginners, while our Full Services and Personal Training plans offer additional benefits. Contact us for a free consultation.',
    },
    {
      question: 'As a beginner, how can I find out which workout program is right for me?',
      answer: 'Not at all! We have classes for all skill levels, from complete beginners to professional fighters. Our fundamentals program will get you started safely with proper technique and conditioning.',
    },
    {
      question: 'Is my membership card valid for use at all Hybrid facilities?',
      answer: 'Yes! Your membership gives you access to all 8 Hybrid branches across the country. You can train at any location that\'s convenient for you.',
    },
    {
      question: 'What are Hybrid\'s operating hours?',
      answer: 'We\'re open 6 AM to 10 PM Monday through Sunday. With over 50 classes per week, you can find training times that fit your schedule.',
    },
    {
      question: 'Does Hybrid offer childcare services?',
      answer: 'Currently, we do not offer childcare services. However, we\'re always looking to improve our facilities and may add this service in the future.',
    },
  ];

  return (
    <section ref={ref} className="py-28 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header - StrongX Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-[-0.02em]">
              Frequently
              <br />
              <span className="text-[#c8ff00]">asked questions</span>
            </h2>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-[#c8ff00]/30 bg-white/[0.02]' : 'border-white/[0.05]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium text-sm pr-4">{faq.question}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'bg-[#c8ff00] text-black' : 'bg-white/[0.05] text-white'
                  }`}>
                    {openIndex === index ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 text-white/40 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
