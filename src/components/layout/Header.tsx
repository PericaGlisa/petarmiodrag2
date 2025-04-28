import { Link } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { BadgeCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-8 w-full bg-gray-900/95 border-b border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://pbs.twimg.com/profile_images/1870930383941857281/pJ8sZXv2_400x400.jpg" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-blue-500/50 hover:border-blue-400 transition-colors"
            />
            <div className="flex items-center gap-1">
              <span className="text-white text-lg font-medium">@petarmiodrag2</span>
              <BadgeCheck className="w-5 h-5 text-blue-500" />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <NavLinks 
            className="hidden lg:flex items-center gap-8"
            linkClassName="text-gray-300 hover:text-white flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          />

          {/* Mobile/Tablet Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}