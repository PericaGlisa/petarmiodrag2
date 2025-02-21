import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between text-xs sm:text-sm">
          <Link 
            to="/privacy-policy" 
            className="text-gray-400 hover:text-blue-300 transition-colors px-3 py-2 sm:p-0"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms-of-service" 
            className="text-gray-400 hover:text-blue-300 transition-colors px-3 py-2 sm:p-0"
          >
            Terms of Service
          </Link>
          <p className="text-gray-400 text-center sm:order-none">
            Designed and developed by <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">@petarmiodrag2</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}