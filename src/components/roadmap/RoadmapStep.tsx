import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';

interface RoadmapStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
  isLast?: boolean;
}

export function RoadmapStep({ 
  step, 
  title, 
  description, 
  icon: Icon,
  tools,
  isLast 
}: RoadmapStepProps) {
  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-800" />
      )}
      <Card className="relative z-10">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-gray-500 font-medium">Step {step}</span>
              <h3 className="text-lg font-semibold text-white m-0">{title}</h3>
            </div>
            <p className="text-gray-400 mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}