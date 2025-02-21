import { Card } from '../ui/Card';
import { Clock } from 'lucide-react';

interface ProductPreviewCardProps {
  title: string;
  image: string;
  gradient: string;
}

export function ProductPreviewCard({ title, image, gradient }: ProductPreviewCardProps) {
  return (
    <Card className="group relative overflow-hidden h-full" role="article" aria-labelledby={`product-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={`absolute inset-0 opacity-10 ${gradient}`} role="presentation" />
      <div className="relative">
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4" role="img" aria-label={`Preview image for ${title}`}>
          <img 
            src={image} 
            alt={`Product preview for ${title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center" role="status" aria-label="Product status">
            <div className="bg-black/80 px-4 py-2 rounded-full flex items-center gap-2">
              <Clock size={16} className="text-blue-400" aria-hidden="true" />
              <span className="text-sm font-medium text-white">Coming Soon</span>
            </div>
          </div>
        </div>
        <h3 id={`product-title-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </Card>
  );
}