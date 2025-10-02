import { Link } from 'react-router-dom';
import { Home, Mail, MessageCircle, User, Calendar, Briefcase } from 'lucide-react';

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  onNavClick?: () => void;
  excludeChat?: boolean;
  chatOnly?: boolean;
}

export function NavLinks({ 
  className = '', 
  linkClassName = '', 
  onNavClick,
  excludeChat = false,
  chatOnly = false
}: NavLinksProps) {
  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/about', icon: User, label: 'About' },
    { to: '/services', icon: Briefcase, label: 'Services' },
    { to: '/newsletter', icon: Mail, label: 'Newsletter' },
    { to: '/booking', icon: Calendar, label: 'Book' },
    { to: '/contact', icon: MessageCircle, label: "Let's chat", isButton: true }
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center gap-2 transition-colors w-full justify-center"
          >
            <link.icon size={18} />
            {link.label}
          </Link>
        ) : (
          <Link
            key={index}
            to={link.to}
            onClick={onNavClick}
            className={linkClassName}
          >
            <link.icon size={18} />
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}