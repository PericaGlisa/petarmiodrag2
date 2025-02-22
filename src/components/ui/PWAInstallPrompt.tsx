import { useContext } from 'react';
import { PWAInstallContext } from '../../contexts/PWAInstallContext';

export function PWAInstallPrompt() {
  const { showInstallPrompt, deferredPrompt } = useContext(PWAInstallContext);

  if (!deferredPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">Install App</h3>
          <p className="mt-1 text-sm text-gray-300">
            Install our app for a better experience
          </p>
        </div>
        <button
          onClick={() => showInstallPrompt()}
          className="ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Install
        </button>
      </div>
    </div>
  );
}