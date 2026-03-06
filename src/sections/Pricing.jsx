import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billingType, setBillingType] = useState('monthly');
  const [selectedService, setSelectedService] = useState('Gym');
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const services = ['Gym', 'Yoga', 'Kickfit', 'Group-X', 'Swimming'];

  const plans = [
    {
      name: 'Gym',
      monthlyPrice: 24,
      yearlyPrice: 19,
      features: [
        'Use the gym equipment',
        'Use steam room',
        'Use the shower',
        'Use the locker',
      ],
    },
    {
      name: 'Full services',
      monthlyPrice: 48,
      yearlyPrice: 38,
      popular: true,
      features: [
        'Use the gym equipment',
        'Use the swimming pool',
        'Take Group-X classes',
        'Take Yoga classes',
        'Use steam room',
        'Use the shower',
        'Use the locker',
      ],
    },
    {
      name: 'Personal trainer',
      sessionPrice: 20,
      features: [
        'Personalize exercises',
        'Use the swimming pool',
        'Use steam room',
        'Use the shower',
        'Use the locker',
      ],
    },
  ];

  return (
    <section ref={ref} id="membership" className="py-28 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.02em]">
            Pricing
          </h2>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          {/* Service Selector */}
          <div className="relative">
            <span className="text-white/30 text-xs uppercase tracking-[0.1em] block text-center mb-2">Choose service:</span>
            <button
              onClick={() => setShowServiceDropdown(!showServiceDropdown)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-full text-white text-sm hover:bg-white/[0.06] transition-colors duration-300"
            >
              {selectedService}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServiceDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showServiceDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-[#0f0f0f] border border-white/[0.08] rounded-xl overflow-hidden z-10">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => {
                      setSelectedService(service);
                      setShowServiceDropdown(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm hover:bg-white/[0.05] transition-colors duration-300 ${
                      selectedService === service ? 'text-[#c8ff00]' : 'text-white/60'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white/[0.03] border border-white/[0.08] rounded-full p-1">
            <button
              onClick={() => setBillingType('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                billingType === 'monthly'
                  ? 'bg-[#c8ff00] text-black'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingType('yearly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                billingType === 'yearly'
                  ? 'bg-[#c8ff00] text-black'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Annual Billing
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                billingType === 'yearly' ? 'bg-black/20 text-black' : 'bg-[#c8ff00]/10 text-[#c8ff00]'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-6 rounded-2xl ${
                plan.popular
                  ? 'bg-[#c8ff00] text-black'
                  : 'bg-white/[0.02] border border-white/[0.05] text-white'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-xl font-medium mb-6 ${plan.popular ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-semibold tracking-[-0.02em] ${plan.popular ? 'text-black' : 'text-white'}`}>
                    ${plan.sessionPrice 
                      ? plan.sessionPrice 
                      : (billingType === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-black/50' : 'text-white/40'}`}>
                    {plan.sessionPrice ? '+/session' : '/month'}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-black/10' : 'bg-[#c8ff00]/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-black' : 'text-[#c8ff00]'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-black/60' : 'text-white/40'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium text-sm transition-all duration-300 ${
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
