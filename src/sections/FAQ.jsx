import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Do I need experience to join?',
      answer: 'Not at all! We have classes for all skill levels, from complete beginners to professional fighters. Our fundamentals program will get you started safely with proper technique and conditioning.',
    },
    {
      question: 'What should I bring to my first class?',
      answer: 'Comfortable workout clothes, a water bottle, and a positive attitude. We\'ll provide any necessary equipment for your trial. If you have gear like gloves or a gi, feel free to bring them!',
    },
    {
      question: 'How much does membership cost?',
      answer: 'We offer flexible membership options starting from $49/month. Our Starter plan is perfect for beginners, while our Full Access and Personal Training plans offer additional benefits. Contact us for current promotions.',
    },
    {
      question: 'What are your operating hours?',
      answer: 'We\'re open 6 AM to 10 PM Monday through Sunday. With over 50 classes per week, you can find training times that fit your schedule.',
    },
    {
      question: 'Can I try a class before signing up?',
      answer: 'Absolutely! We offer a free 7-day trial with unlimited access to all our classes. No credit card required. This gives you the chance to experience our facility and find what you love.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Frequently <span className="text-[#c8ff00]">asked</span>
              <br />
              <span className="text-[#c8ff00]">questions</span>
            </h2>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  openIndex === index ? 'border-[#c8ff00]/50 bg-white/[0.02]' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    openIndex === index ? 'bg-[#c8ff00] text-black' : 'bg-white/5 text-white'
                  }`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed">
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
