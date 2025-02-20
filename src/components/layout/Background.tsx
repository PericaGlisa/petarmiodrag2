import { motion } from 'framer-motion';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050914] via-[#070B1A] to-[#0A1026] w-full h-full">
        <motion.div
          className="absolute -inset-[100%] opacity-[0.15]"
          style={{
            background: 'linear-gradient(45deg, transparent 45%, rgba(56, 189, 248, 0.1) 50%, transparent 55%)',
            backgroundSize: '200% 200%',
            willChange: 'transform'
          }}
          animate={{
            backgroundPosition: ['200% 200%', '-50% -50%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full opacity-30"
          style={{
            background: 'radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.12) 0%, transparent 50%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full opacity-25"
          style={{
            background: 'radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.25, 0.15, 0.25]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full opacity-20"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 55%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.1, 0.2]
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
};
