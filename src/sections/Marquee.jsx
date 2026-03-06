import { motion } from 'framer-motion';

const Marquee = () => {
  const items = ['Gym', 'Yoga', 'Kickfit', 'Group-X', 'Swimming'];
  
  return (
    <section className="py-6 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white/10 uppercase tracking-tight hover:text-[#c8ff00]/30 transition-colors duration-500 cursor-default">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#c8ff00]/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
