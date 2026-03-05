import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

const Schedule = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeDay, setActiveDay] = useState('Mon');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const schedule = {
    Mon: [
      { time: '6:00 AM', class: 'Morning MMA', duration: '60 min', level: 'All Levels' },
      { time: '9:00 AM', class: 'BJJ Fundamentals', duration: '60 min', level: 'Beginner' },
      { time: '12:00 PM', class: 'Muay Thai', duration: '60 min', level: 'Intermediate' },
      { time: '5:00 PM', class: 'Boxing', duration: '60 min', level: 'All Levels' },
      { time: '6:30 PM', class: 'Advanced MMA', duration: '90 min', level: 'Advanced' },
      { time: '8:00 PM', class: 'Open Mat', duration: '120 min', level: 'All Levels' },
    ],
    Tue: [
      { time: '6:00 AM', class: 'Muay Thai', duration: '60 min', level: 'All Levels' },
      { time: '9:00 AM', class: 'Wrestling', duration: '60 min', level: 'Intermediate' },
      { time: '12:00 PM', class: 'BJJ No-Gi', duration: '60 min', level: 'All Levels' },
      { time: '5:00 PM', class: 'Kids MMA', duration: '45 min', level: 'Ages 8-14' },
      { time: '6:30 PM', class: 'Striking', duration: '60 min', level: 'All Levels' },
      { time: '8:00 PM', class: 'Sparring', duration: '90 min', level: 'Advanced' },
    ],
    Wed: [
      { time: '6:00 AM', class: 'BJJ Gi', duration: '60 min', level: 'All Levels' },
      { time: '9:00 AM', class: 'Boxing', duration: '60 min', level: 'Beginner' },
      { time: '12:00 PM', class: 'MMA Conditioning', duration: '45 min', level: 'All Levels' },
      { time: '5:00 PM', class: 'Muay Thai', duration: '60 min', level: 'Intermediate' },
      { time: '6:30 PM', class: 'BJJ Advanced', duration: '90 min', level: 'Advanced' },
      { time: '8:00 PM', class: 'Open Mat', duration: '120 min', level: 'All Levels' },
    ],
    Thu: [
      { time: '6:00 AM', class: 'Wrestling', duration: '60 min', level: 'All Levels' },
      { time: '9:00 AM', class: 'Muay Thai', duration: '60 min', level: 'Beginner' },
      { time: '12:00 PM', class: 'BJJ No-Gi', duration: '60 min', level: 'Intermediate' },
      { time: '5:00 PM', class: 'Kids BJJ', duration: '45 min', level: 'Ages 5-12' },
      { time: '6:30 PM', class: 'MMA', duration: '90 min', level: 'All Levels' },
      { time: '8:00 PM', class: 'Sparring', duration: '90 min', level: 'Advanced' },
    ],
    Fri: [
      { time: '6:00 AM', class: 'Morning MMA', duration: '60 min', level: 'All Levels' },
      { time: '9:00 AM', class: 'Boxing', duration: '60 min', level: 'All Levels' },
      { time: '12:00 PM', class: 'BJJ Fundamentals', duration: '60 min', level: 'Beginner' },
      { time: '5:00 PM', class: 'Muay Thai', duration: '60 min', level: 'Intermediate' },
      { time: '6:30 PM', class: 'Fight Team Training', duration: '120 min', level: 'Advanced' },
      { time: '8:00 PM', class: 'Open Mat', duration: '120 min', level: 'All Levels' },
    ],
    Sat: [
      { time: '9:00 AM', class: 'Open Mat BJJ', duration: '120 min', level: 'All Levels' },
      { time: '12:00 PM', class: 'Weekend Warriors', duration: '90 min', level: 'All Levels' },
      { time: '2:00 PM', class: 'Kids Class', duration: '60 min', level: 'Ages 5-14' },
    ],
  };

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="section bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] gradient-red-glow opacity-10 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#FF3B30] text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Class Schedule
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide mb-6"
          >
            Train on Your Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto"
          >
            Over 50 classes per week, from early morning to late evening.
            Find the perfect time for your training.
          </motion.p>
        </div>

        {/* Day Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-200 ${
                activeDay === day
                  ? 'bg-[#FF3B30] text-white'
                  : 'bg-[#141414] text-[#9CA3AF] hover:bg-[#2D2D2D] hover:text-white'
              }`}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-4 max-w-4xl mx-auto"
        >
          {schedule[activeDay].map((item, index) => (
            <motion.div
              key={`${activeDay}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-[#141414] rounded-xl p-6 border border-[#2D2D2D] hover:border-[#FF3B30]/50 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#FF3B30]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#FF3B30]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">{item.class}</div>
                  <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                    <span>•</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                    item.level === 'Beginner'
                      ? 'bg-green-500/20 text-green-400'
                      : item.level === 'Intermediate'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : item.level === 'Advanced'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-[#FF3B30]/20 text-[#FF6B6B]'
                  }`}
                >
                  {item.level}
                </span>
                <button className="w-10 h-10 rounded-lg bg-[#2D2D2D] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FF3B30]">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#9CA3AF] mb-4 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            123 Fighter&apos;s Way, Combat City, CC 12345
          </p>
          <button className="btn btn-primary">
            View Full Schedule
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
