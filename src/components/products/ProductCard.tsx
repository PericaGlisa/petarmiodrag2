import { Card } from '../ui/Card';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProductCard({ title, description, image, link }: ProductCardProps) {
  return (
    <Card className="group cursor-pointer">
      <a href={link} className="block">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
        />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </a>
    </Card>
  );
}