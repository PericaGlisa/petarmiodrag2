import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  iconComponent: LucideIcon;
  iconColor: string;
  title: string;
  date: string;
  description: string;
}

export function TimelineItem({ 
  iconComponent: Icon,
  iconColor,
  title,
  date,
  description 
}: TimelineItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-gray-800 p-2 rounded-lg">
        <Icon size={20} className={iconColor} />
      </div>
      <div>
        <div className="flex items-center gap-4">
          <h3 className="text-white font-medium">{title}</h3>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}