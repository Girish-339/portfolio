import React, { useEffect, useState } from 'react';
import { Database, BarChart3, Brain } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  
  const icons = [Database, BarChart3, Brain];
  const labels = ['Loading Data...', 'Analyzing Insights...', 'Initializing ML...'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(iconInterval);
    };
  }, []);

  const CurrentIcon = icons[currentIcon];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-pulse">
            <CurrentIcon className="w-12 h-12 text-white animate-bounce" />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-blue-300/30 animate-ping"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
          {labels[currentIcon]}
        </h2>
        
        <div className="w-64 mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/70 text-sm">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;