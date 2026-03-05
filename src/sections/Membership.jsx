import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const Membership = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const plans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for beginners starting their martial arts journey',
      features: [
        'Access to all group classes',
        'Basic equipment rental',
        'Locker room access',
        '2 guest passes/month',
      ],
      popular: false,
    },
    {
      name: 'Fighter',
      price: 149,
      period: 'month',
      description: 'For serious practitioners ready to level up',
      features: [
        'Everything in Starter',
        'Unlimited training',
        'Advanced workshops',
        'Private lesson discount (20%)',
        'Spartan gym access',
        '5 guest passes/month',
      ],
      popular: true,
    },
    {
      name: 'Champion',
      price: 249,
      period: 'month',
      description: 'Elite training for competitors and professionals',
      features: [
        'Everything in Fighter',
        '4 private lessons/month',
        'Nutrition consultation',
        'Recovery suite access',
        'Fight team access',
        'Unlimited guest passes',
        'Premium equipment',
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="membership"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-[#FF3B30]">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B30] to-[#C41E3A]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold uppercase tracking-wider">
              Limited Time Offer
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wide mb-6"
          >
            Start Your Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Free 7-day trial. No commitment. Experience the Hybrid difference.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? 'bg-white text-[#0A0A0A] scale-105 md:scale-110 z-10 shadow-2xl'
                  : 'bg-white/10 backdrop-blur text-white border border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#FF3B30] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3
                  className={`font-heading text-2xl uppercase tracking-wide mb-2 ${
                    plan.popular ? 'text-[#0A0A0A]' : 'text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? 'text-[#6B7280]' : 'text-white/70'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className={`font-heading text-5xl ${
                      plan.popular ? 'text-[#FF3B30]' : 'text-white'
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.popular ? 'text-[#6B7280]' : 'text-white/70'
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? 'bg-[#FF3B30]/10'
                            : 'bg-white/20'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? 'text-[#FF3B30]' : 'text-white'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-[#404040]' : 'text-white/90'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#FF3B30] text-white hover:bg-[#C41E3A]'
                      : 'bg-white text-[#FF3B30] hover:bg-white/90'
                  }`}
                >
                  {plan.popular ? 'Claim Free Trial' : 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white/70 text-sm"
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>100% satisfaction guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;
