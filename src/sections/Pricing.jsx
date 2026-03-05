import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billingType, setBillingType] = useState('monthly');

  const plans = [
    {
      name: 'Gym',
      monthlyPrice: 49,
      yearlyPrice: 39,
      description: 'Perfect for beginners',
      features: [
        'Use the gym equipment',
        'Access locker rooms',
        'Basic fitness assessment',
        'Open gym access',
      ],
    },
    {
      name: 'Full Access',
      monthlyPrice: 99,
      yearlyPrice: 79,
      description: 'Most popular choice',
      popular: true,
      features: [
        'Everything in Gym',
        'All group classes',
        'MMA & BJJ classes',
        'Muay Thai training',
        'Recovery suite access',
        'Personal training discount',
      ],
    },
    {
      name: 'Personal Training',
      monthlyPrice: 199,
      yearlyPrice: 159,
      description: 'Premium experience',
      features: [
        'Everything in Full Access',
        '8 PT sessions/month',
        'Custom nutrition plan',
        'Body composition tracking',
        'Priority booking',
        'Guest passes (4/month)',
      ],
    },
  ];

  return (
    <section ref={ref} id="membership" className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pricing
          </h2>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <span className="text-white/50 text-sm">Choose service:</span>
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setBillingType('monthly')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                billingType === 'monthly'
                  ? 'bg-[#c8ff00] text-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingType('yearly')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                billingType === 'yearly'
                  ? 'bg-[#c8ff00] text-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Annual Billing
              <span className="text-xs bg-[#c8ff00]/20 text-[#c8ff00] px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative p-8 rounded-3xl ${
                plan.popular
                  ? 'bg-[#c8ff00] text-black'
                  : 'bg-white/[0.02] border border-white/10 text-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-[#c8ff00] text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-black/60' : 'text-white/50'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>
                  ${billingType === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-black/60' : 'text-white/50'}`}>
                  /month
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-black/10' : 'bg-[#c8ff00]/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-black' : 'text-[#c8ff00]'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-black/80' : 'text-white/70'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all ${
                  plan.popular
                    ? 'bg-black text-[#c8ff00] hover:bg-black/80'
                    : 'bg-[#c8ff00] text-black hover:bg-[#d4ff33]'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
