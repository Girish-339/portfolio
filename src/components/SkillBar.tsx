import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SkillBarProps {
  name: string;
  level: number;
  icon: LucideIcon;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, icon: Icon, delay = 0 }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div 
      ref={ref}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
      </div>
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${animatedLevel}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
        <span className="absolute right-0 -top-8 text-sm font-medium text-gray-600 dark:text-gray-400">
          {animatedLevel}%
        </span>
      </div>
    </div>
  );
};

export default SkillBar;