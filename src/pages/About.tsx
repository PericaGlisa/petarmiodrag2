import { ProfileSection } from '../components/about/ProfileSection';
import { StatsSection } from '../components/about/StatsSection';
import { RoadmapSection } from '../components/roadmap/RoadmapSection';
import { ToolGrid } from '../components/tools/ToolGrid';
import { Card } from '../components/ui/Card';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ProfileSection />

        <section className="mb-8">
          <RoadmapSection />
        </section>

        <section className="mb-8">
          <StatsSection />
        </section>

        <section className="mb-8">
          <h2>Tools & Technologies</h2>
          <Card>
            <ToolGrid />
          </Card>
        </section>
      </div>
    </div>
  );
}