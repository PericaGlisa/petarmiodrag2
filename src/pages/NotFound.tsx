import { Link } from 'react-router-dom';
import { Home, Coffee, Frown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Frown className="w-24 h-24 text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -right-2 -top-2"
              >
                <Coffee className="w-8 h-8 text-blue-300" />
              </motion.div>
            </div>
          </div>

          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-8">
            Oops! Looks like this page took a coffee break ☕
          </h2>
          
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Don't worry, even the best developers get lost sometimes. 
            While we're searching for this page, why not head back home?
          </p>

          <Button 
            as={Link} 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3"
          >
            <Home size={20} />
            Back to Homepage
          </Button>
        </motion.div>
      </div>
    </div>
  );
}