import { usePWAInstall } from '../../contexts/PWAInstallContext';
import { useState } from 'react';

export function PWAInstallBanner() {
  const { isInstallable, isInstalling, triggerInstall } = usePWAInstall();
  const [showBanner, setShowBanner] = useState(true);

  if (!isInstallable) return null;
  if (!showBanner) return null;

  const handleInstallClick = async () => {
    await triggerInstall();
    setShowBanner(false);
  };

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-blue-900/80 border border-blue-500/30 backdrop-blur-md z-20 py-3 px-4 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 shadow-blue-500/10 max-w-sm mx-auto">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-white text-sm font-medium">Install App</p>
          <p className="text-gray-300 text-xs">Get the best experience</p>
        </div>
        <button
          onClick={handleInstallClick}
          disabled={isInstalling}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isInstalling ? 'Installing...' : 'Install'}
        </button>
      </div>
    </div>
  );
}