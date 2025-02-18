import { Link } from 'react-router-dom';
import { Home, User, Mail, MessageCircle, Calendar } from 'lucide-react';

export function BottomDock() {
  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/about', icon: User, label: 'About' },
    { to: '/newsletter', icon: Mail, label: 'Newsletter' },
    { to: '/booking', icon: Calendar, label: 'Book' },
    { to: '/contact', icon: MessageCircle, label: 'Chat' }
  ];

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/95 border border-blue-500/40 backdrop-blur-sm z-40 py-2 px-2 sm:px-4 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 shadow-blue-500/10 will-change-transform mb-16 sm:mb-20">
      <div className="flex items-center gap-1 sm:gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="flex flex-col items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50 touch-manipulation"
          >
            <link.icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
            <span className="text-[10px] sm:text-xs whitespace-nowrap">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}