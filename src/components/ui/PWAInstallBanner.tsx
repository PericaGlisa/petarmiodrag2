import { usePWAInstall } from '../../contexts/PWAInstallContext';
import { FaDownload } from 'react-icons/fa';

export function PWAInstallBanner() {
  const { isInstallable, isInstalling, isInstalled, triggerInstall } = usePWAInstall();

  if (!isInstallable || isInstalled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-4 border border-blue-500 dark:border-blue-400">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Install PG² Portfolio App
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Get quick access to web development excellence
          </p>
        </div>
        <button
          onClick={triggerInstall}
          disabled={isInstalling}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaDownload className="w-4 h-4" />
          <span>{isInstalling ? 'Installing...' : 'Install'}</span>
        </button>
      </div>
    </div>
  );
}