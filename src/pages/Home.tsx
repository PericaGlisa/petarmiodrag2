import { Profile } from '../components/home/Profile';
import { WelcomeMessage } from '../components/home/WelcomeMessage';
import { ProductsPreviewSection } from '../components/products/ProductsPreviewSection';
import { StartupVideosSection } from '../components/videos/StartupVideosSection';
import { ValueRoadmap } from '../components/home/ValueRoadmap';
import { ToolGrid } from '../components/tools/ToolGrid';
import { Card } from '../components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[300px,1fr] xl:grid-cols-[350px,1fr] gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:order-1 order-first w-full">
            <Profile />
          </div>

          <div className="space-y-8 sm:space-y-12 lg:order-2">
            <WelcomeMessage />
            
            <ValueRoadmap />

            <ProductsPreviewSection />

            <section>
              <h2>My Favorite Tools</h2>
              <Card>
                <ToolGrid />
              </Card>
            </section>

            <StartupVideosSection />
          </div>
        </div>
      </div>
    </div>
  );
}