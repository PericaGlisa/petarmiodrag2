import { motion } from 'framer-motion';

export function TopBar() {
  const messages = [
    '🚀 Crafting digital experiences that inspire and innovate at petarmiodrag.xyz',
    '💡 Transforming ideas into scalable SaaS solutions',
    '🎨 Creating pixel-perfect UI/UX designs for modern web applications',
    '⚡ Rapid MVP development and agile product iterations',
    '🛠️ Building robust and scalable web architectures',
    '🌐 Specializing in React, TypeScript, and modern web technologies',
    '📱 Responsive designs that work seamlessly across all devices',
    '🔍 Performance-optimized web applications for the best user experience',
    '🤝 Collaborative approach to digital product development'
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 overflow-hidden">
      <div className="relative w-full h-full flex items-center">
        <motion.div
          className="whitespace-nowrap text-gray-400 text-sm"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
        >
          {messages.join(' • ')}
        </motion.div>
      </div>
    </div>
  );

}