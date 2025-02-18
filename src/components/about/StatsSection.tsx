import { Card } from '../ui/Card';
import { Rocket, Users, Briefcase } from 'lucide-react';

const achievements = [
  {
    icon: Rocket,
    title: "Product Development",
    description: "Built and shipped several web applications and tools"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Led cross-functional teams to build scalable solutions"
  },
  {
    icon: Briefcase,
    title: "Client Projects",
    description: "Helped businesses transform their digital presence"
  }
];

export function StatsSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {achievements.map((achievement, index) => (
        <Card key={index} className="p-6">
          <div className="flex flex-col items-center text-center">
            <achievement.icon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
            <p className="text-gray-400">{achievement.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}