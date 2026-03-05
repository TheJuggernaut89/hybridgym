import { motion } from 'framer-motion';

const Marquee = () => {
  const items = ['MMA', 'BJJ', 'Muay Thai', 'Boxing', 'Wrestling', 'Kids Martial Arts'];
  
  return (
    <section className="py-8 bg-[#0a0a0a] border-y border-white/10 overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="text-4xl md:text-5xl font-bold text-white/20 uppercase tracking-wider hover:text-[#c8ff00]/40 transition-colors cursor-default">
                {item}
              </span>
              <span className="w-3 h-3 rounded-full bg-[#c8ff00]/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
