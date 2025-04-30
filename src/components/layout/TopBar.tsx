import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TopBar() {
  const messages = [
    '🚀 Crafting digital experiences that inspire and innovate at petarmiodrag2.xyz',
    '💡 Transforming ideas into scalable SaaS solutions',
    '🎨 Creating pixel-perfect UI/UX designs for modern web applications',
    '⚡ Rapid MVP development and agile product iterations',
    '🛠️ Building robust and scalable web architectures',
    '🌐 Specializing in React, TypeScript, and modern web technologies',
    '📱 Responsive designs that work seamlessly across all devices',
    '🔍 Performance-optimized web applications for the best user experience',
    '🤝 Collaborative approach to digital product development'
  ];
  

  const [duration, setDuration] = useState(25);
  const [fontSize, setFontSize] = useState('text-xs sm:text-sm md:text-sm');
  const [padding, setPadding] = useState('py-1.5 px-2');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLandscape = width > height;
      
      // Adjust settings based on device width and orientation
      if (width < 640) { // Mobile
        setDuration(isLandscape ? 90 : 165);
        setFontSize(isLandscape ? 'text-[11px]' : 'text-xs');
        setPadding(isLandscape ? 'py-1 px-1.5' : 'py-1.5 px-2');
      } else if (width < 768) { // Small Tablet
        setDuration(isLandscape ? 100 : 155);
        setFontSize(isLandscape ? 'text-xs' : 'text-xs sm:text-sm');
        setPadding(isLandscape ? 'py-1.5 px-2' : 'py-1.5 px-2');
      } else if (width < 1024) { // Large Tablet
        setDuration(isLandscape ? 110 : 145);
        setFontSize(isLandscape ? 'text-sm' : 'text-xs sm:text-sm');
        setPadding(isLandscape ? 'py-1.5 px-2' : 'py-1.5 px-2');
      } else { // Desktop
        setDuration(isLandscape ? 90 : 135);
        setFontSize('text-xs sm:text-sm md:text-sm');
        setPadding('py-1.5 px-2');
      }
    };

    // Initial sizing
    handleResize();
    
    // Listen for both resize and orientation change events
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 h-auto min-h-6 ${padding} bg-gray-900/95 backdrop-blur-sm border-b border-gray-600/80 z-40 overflow-hidden shadow-md`}>
      <div className="relative w-full h-full flex items-center">
        <motion.div
          className={`whitespace-nowrap text-gray-200 font-light ${fontSize} tracking-wide md:tracking-wider`}
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear"
            }
          }}
        >
          {messages.join(' • ').split('•').join('  •  ')}
        </motion.div>
      </div>
    </div>
  );
}