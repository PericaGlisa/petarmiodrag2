import { Play } from 'lucide-react';
import { Card } from '../ui/Card';
import type { VideoProps } from './types';

interface VideoCardProps extends VideoProps {
  onVideoClick: () => void;
}

export function VideoCard({ 
  title, 
  speaker, 
  thumbnail, 
  topic,
  onVideoClick 
}: VideoCardProps) {
  return (
    <button 
      onClick={onVideoClick}
      className="text-left w-full"
    >
      <Card className="group hover:border-blue-500/50 transition-all duration-300">
        <div className="relative">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full aspect-video object-cover rounded-lg mb-4"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-blue-600 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-1 line-clamp-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-2">{speaker}</p>
          <span className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
            {topic}
          </span>
        </div>
      </Card>
    </button>
  );
}