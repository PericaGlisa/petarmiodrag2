import { Card } from '../ui/Card';
import { ROADMAP_STEPS } from '../../constants/roadmap';
import { ChevronDown } from 'lucide-react';

export function ValueRoadmap() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2>From Idea to Revenue</h2>
        <span className="text-blue-400 text-sm">4-6 weeks timeline</span>
      </div>

      <Card className="bg-blue-600/10 mb-8">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-2">Why Work With Me?</h3>
            <p className="text-gray-300">
              Specialized in rapid MVP development and market validation. Transform your idea into a revenue-generating SaaS product with proven methodologies and modern tech stack.
            </p>
          </div>
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {ROADMAP_STEPS.map((step, index) => (
          <Card key={index} className="relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 bg-blue-600/10 text-blue-400 px-2 py-1 text-xs font-medium rounded-bl-lg">
              Step {index + 1}
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-gray-800/50 text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}