import { Link } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { BadgeCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-4 sm:top-8 w-full bg-gray-900/95 border-b border-gray-800 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between min-h-[44px]">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/profile.jpg" 
              alt="Petar Glišović Profile"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-500/50 hover:border-blue-400 transition-colors"
            />
            <div className="flex items-center gap-1">
              <span className="text-white text-base sm:text-lg font-medium">@petarmiodrag2</span>
              <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            </div>
          </Link>
          
          {/* Desktop Navigation - Show from medium screens up */}
          <NavLinks 
            className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 nav-tablet-optimize nav-landscape-optimize nav-desktop-optimize"
            linkClassName="text-gray-300 hover:text-white flex items-center gap-1.5 lg:gap-2 xl:gap-2.5 px-2 lg:px-2.5 xl:px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm lg:text-sm xl:text-base"
          />

          {/* Mobile/Tablet Menu - Show only on small screens */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}