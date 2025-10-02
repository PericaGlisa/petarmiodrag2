import { useState, useEffect } from 'react';
import { NavLinks } from './NavLinks';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="block lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2.5 hover:bg-gray-800/80 active:bg-gray-800 rounded-xl transition-all transform active:scale-95"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 350,
                damping: 35
              }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-800/50 z-[1000] flex flex-col shadow-2xl landscape:h-screen landscape:w-96 landscape:overflow-y-auto"
              >
              <div className="p-5 border-b border-gray-800/50 flex justify-between items-center">
                <span className="text-blue-400 font-semibold text-lg">Discover More</span>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 hover:bg-gray-800/80 active:bg-gray-800 rounded-xl transition-all transform active:scale-95"
                  animate={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <X size={20} className="text-white" />
                </motion.button>
              </div>

              <motion.div 
                className="flex-1 overflow-y-auto py-5 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <NavLinks
                  className="flex flex-col space-y-2.5"
                  linkClassName="text-gray-300 hover:text-white flex items-center gap-3 p-3.5 rounded-xl hover:bg-gray-800/80 active:bg-gray-800 transition-all transform active:scale-98"
                  onNavClick={() => setIsOpen(false)}
                  excludeChat={true}
                />
              </motion.div>

              <motion.div 
                className="p-5 border-t border-gray-800/50 bg-gray-900/95 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <NavLinks
                  className="flex flex-col"
                  onNavClick={() => setIsOpen(false)}
                  chatOnly={true}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}