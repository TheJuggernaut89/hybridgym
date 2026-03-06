import { motion } from 'framer-motion';

const Marquee = () => {
  const items = ['Gym', 'yoga', 'Kickfit', 'group-x', 'Swimming'];
  
  return (
    <section className="py-5 bg-[#0a0a0a] border-y border-white/[0.05] overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...items, ...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white/[0.08] lowercase tracking-tight">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/[0.15]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
