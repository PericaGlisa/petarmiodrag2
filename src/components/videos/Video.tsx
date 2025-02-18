import { Card } from '../ui/Card';
import { Play } from 'lucide-react';

interface VideoProps {
  title: string;
  thumbnail: string;
  date: string;
}

export function Video({ title, thumbnail, date }: VideoProps) {
  return (
    <Card className="group cursor-pointer">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full aspect-video object-cover rounded-lg mb-4"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{date}</p>
    </Card>
  );
}