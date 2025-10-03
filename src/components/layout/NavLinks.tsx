import { Link } from 'react-router-dom';
import { Home, Mail, MessageCircle, User, Calendar, Briefcase } from 'lucide-react';

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  onNavClick?: () => void;
  excludeChat?: boolean;
  chatOnly?: boolean;
  isMobile?: boolean;
}

export function NavLinks({ 
  className = '', 
  linkClassName = '', 
  onNavClick,
  excludeChat = false,
  chatOnly = false,
  isMobile = false
}: NavLinksProps) {
  const links = [
    { to: '/', icon: Home, label: 'Home', shortLabel: 'Home' },
    { to: '/about', icon: User, label: 'About', shortLabel: 'About' },
    { to: '/services', icon: Briefcase, label: 'Services', shortLabel: 'Services' },
    { to: '/newsletter', icon: Mail, label: 'Newsletter', shortLabel: 'News' },
    { to: '/booking', icon: Calendar, label: 'Book', shortLabel: 'Book' },
    { to: '/contact', icon: MessageCircle, label: "Let's chat", shortLabel: "Chat", isButton: true }
  ];

  const filteredLinks = chatOnly 
    ? links.filter(link => link.isButton)
    : excludeChat 
      ? links.filter(link => !link.isButton)
      : links;

  return (
    <nav className={className}>
      {filteredLinks.map((link, index) => 
        link.isButton ? (
          <Link
            key={index}
            to={link.to}
            onClick={onNavClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 lg:px-4 xl:px-5 py-2 lg:py-2.5 xl:py-3 rounded-lg flex items-center gap-1.5 lg:gap-2 xl:gap-3 transition-colors w-full justify-center text-sm lg:text-sm xl:text-base"
          >
            <link.icon size={16} className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" />
            <span className={isMobile ? "inline" : "hidden md:inline xl:hidden"}>{link.shortLabel}</span>
            <span className={isMobile ? "hidden" : "hidden xl:inline"}>{link.label}</span>
          </Link>
        ) : (
          <Link
            key={index}
            to={link.to}
            onClick={onNavClick}
            className={linkClassName}
          >
            <link.icon size={16} className="lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px]" />
            <span className={isMobile ? "inline" : "hidden md:inline xl:hidden"}>{link.shortLabel}</span>
            <span className={isMobile ? "hidden" : "hidden xl:inline"}>{link.label}</span>
          </Link>
        )
      )}
    </nav>
  );
}