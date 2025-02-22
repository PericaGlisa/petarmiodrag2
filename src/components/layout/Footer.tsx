import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          Designed and developed by <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">@petarmiodrag2</Link>
        </p>
      </div>
    </footer>
  );
}