import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0A1930] to-[#0A1935]">
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(64, 144, 255, 0.15) 0%, transparent 70%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.25, 0.2, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 80% 70%, rgba(100, 155, 255, 0.12) 0%, transparent 70%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.2, 0.15, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}