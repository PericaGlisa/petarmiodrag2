import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
    localStorage.setItem('cookieConsent', 'accepted');
  };

  const handleReject = () => {
    setIsVisible(false);
    onReject();
    localStorage.setItem('cookieConsent', 'rejected');
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setIsVisible(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-50 p-6 bg-gray-900 bg-opacity-95 backdrop-blur-sm border border-gray-800 rounded-xl shadow-xl max-w-7xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white text-sm">
              <p>
                I use cookies to enhance your experience. By continuing to visit this site you agree to my use of cookies.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReject}
                className="btn btn-secondary text-sm"
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="btn btn-primary text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};