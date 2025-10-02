import { RoadmapStep } from './RoadmapStep';
import { Card } from '../ui/Card';
import { ROADMAP_STEPS } from '../../constants/roadmap';

export function RoadmapSection() {
  return (
    <section>
      <h2>MVP to Market Roadmap</h2>
      <div className="space-y-4">
        {ROADMAP_STEPS.map((step, index) => (
          <RoadmapStep
            key={index}
            step={index + 1}
            {...step}
            isLast={index === ROADMAP_STEPS.length - 1}
          />
        ))}
      </div>
      <Card className="mt-6 bg-blue-600/10">
        <p className="text-blue-400 text-sm">
          Average timeline: 4-6 weeks from concept to first paying customer
        </p>
      </Card>
    </section>
  );
}