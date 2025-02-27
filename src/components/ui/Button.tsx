import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  as?: typeof Link;
  to?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  as: Component = 'button',
  to,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (Component === Link && to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
}