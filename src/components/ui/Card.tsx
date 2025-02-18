interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`glass-card p-6 hover-scale ${className}`}>
      {children}
    </div>
  );
}