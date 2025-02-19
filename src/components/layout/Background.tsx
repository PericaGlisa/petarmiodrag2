import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.35) 0%, transparent 70%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.5, 0.6],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.35) 0%, transparent 70%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
}