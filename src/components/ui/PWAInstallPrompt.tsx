import { useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler as EventListener);

    // Check if the app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://');

    if (isStandalone) {
      setShowInstallBanner(false);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler as EventListener);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setShowInstallBanner(false);
      }
      setDeferredPrompt(null);
    } catch (error) {
      console.error('Error during PWA installation:', error);
    }
  };

  if (!showInstallBanner) return null;

  return (
    <div className="w-full bg-gray-900 p-4 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-lg shadow-lg border border-gray-800">
      <div className="flex items-center gap-3">
        <FaCloudDownloadAlt className="text-blue-400 text-xl" />
        <p className="text-white font-medium text-center sm:text-left">Install my app for a better experience!</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setShowInstallBanner(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          Not now
        </button>
        <button
          onClick={handleInstallClick}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
        >
          Install App
        </button>
      </div>
    </div>
  );
}