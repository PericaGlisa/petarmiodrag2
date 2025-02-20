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
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-blue-900/80 border border-blue-500/30 backdrop-blur-md z-30 py-1.5 px-1.5 sm:px-3 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 shadow-blue-500/10 will-change-transform max-w-sm mx-auto">
      <div className="flex items-center justify-between gap-0.5 sm:gap-1.5">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="flex flex-col items-center justify-center gap-0.5 p-2 sm:p-2.5 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-gray-800/70 active:bg-gray-800/90 touch-manipulation min-w-[52px] sm:min-w-[64px]"
          >
            <link.icon className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]" />
            <span className="text-[10px] sm:text-[11px] font-medium whitespace-nowrap">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}