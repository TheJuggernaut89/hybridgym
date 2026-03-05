import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Do I need experience to join?',
      answer:
        "Not at all! We have classes for all skill levels, from complete beginners to professional fighters. Our fundamentals program will get you started safely with proper technique and conditioning. Everyone starts somewhere, and our coaches are experienced in helping beginners progress at their own pace.",
    },
    {
      question: 'What should I bring to my first class?',
      answer:
        "Comfortable workout clothes, a water bottle, and a positive attitude. We'll provide any necessary equipment for your trial. If you have gear like gloves or a gi, feel free to bring them! We recommend arriving 15 minutes early to get oriented and meet your instructor.",
    },
    {
      question: 'How much does membership cost?',
      answer:
        "We offer flexible membership options starting from $99/month. Our Starter plan is perfect for beginners, while our Fighter and Champion plans offer additional benefits like private lessons and unlimited access. Contact us for current promotions and to find the plan that fits your goals.",
    },
    {
      question: 'Is there parking available?',
      answer:
        "Yes! We have free parking for all members right outside the facility. Our lot has over 100 spaces, and there's also street parking available nearby. We recommend arriving a few minutes early during peak hours (5-8 PM) to find the best spot.",
    },
    {
      question: 'Can I try a class before signing up?',
      answer:
        "Absolutely! We offer a free 7-day trial with unlimited access to all our classes. No credit card required. This gives you the chance to experience our facility, meet our coaches, and try different disciplines to find what you love.",
    },
    {
      question: 'What is the class schedule like?',
      answer:
        "We offer over 50 classes per week, with sessions running from 6 AM to 10 PM Monday through Friday, and weekend classes on Saturday. You can check our full schedule online or through our mobile app. We have classes for every discipline at various times to fit your schedule.",
    },
    {
      question: 'Are your coaches certified?',
      answer:
        "All our coaches are highly qualified with certifications from recognized martial arts organizations. Many are active or former professional fighters with real competition experience. Our head coaches have 10+ years of teaching experience and hold black belts or equivalent rankings in their respective disciplines.",
    },
    {
      question: 'Do you offer kids classes?',
      answer:
        "Yes! We have martial arts programs for kids ages 5-14. Our kids classes focus on building confidence, discipline, and fitness in a fun, safe environment. We offer separate programs for different age groups to ensure appropriate instruction and engagement.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gradient-red-glow opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#FF3B30] text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto"
          >
            Everything you need to know before starting your training journey.
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                className={`bg-[#141414] rounded-xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-[#FF3B30]/50 shadow-lg shadow-[#FF3B30]/5'
                    : 'border-[#2D2D2D] hover:border-[#404040]'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-[#FF3B30] text-white'
                        : 'bg-[#2D2D2D] text-[#9CA3AF]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-[#9CA3AF] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#141414] rounded-2xl p-8 md:p-12 border border-[#2D2D2D] max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-[#FF3B30]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-[#FF3B30]" />
            </div>
            <h3 className="font-heading text-2xl text-white uppercase tracking-wide mb-3">
              Still Have Questions?
            </h3>
            <p className="text-[#9CA3AF] mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary">
                Contact Support
              </button>
              <button className="btn btn-secondary">
                Call Us: (555) 123-4567
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
