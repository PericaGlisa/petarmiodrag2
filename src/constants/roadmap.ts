import { 
  Lightbulb, 
  Code2, 
  Palette, 
  Users, 
  Rocket,
  CreditCard
} from 'lucide-react';
import type { RoadmapStep } from '../types';

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    title: "Ideation & Validation",
    description: "Validate your SaaS idea through market research and potential customer interviews",
    icon: Lightbulb,
    tools: ["Customer Interviews", "Market Research", "Competitive Analysis"]
  },
  {
    title: "Design & Prototype",
    description: "Create high-fidelity designs and interactive prototypes for rapid validation",
    icon: Palette,
    tools: ["Figma", "Adobe XD", "Protopie"]
  },
  {
    title: "MVP Development",
    description: "Build core features using modern tech stack optimized for rapid development",
    icon: Code2,
    tools: ["React", "Node.js", "Supabase", "Tailwind CSS"]
  },
  {
    title: "User Testing",
    description: "Gather feedback from early adopters and iterate on core features",
    icon: Users,
    tools: ["UserTesting", "Hotjar", "Analytics"]
  },
  {
    title: "Launch & Distribution",
    description: "Deploy MVP and implement initial marketing strategies",
    icon: Rocket,
    tools: ["Product Hunt", "Social Media", "Content Marketing"]
  },
  {
    title: "Monetization",
    description: "Implement payment system and optimize conversion funnel",
    icon: CreditCard,
    tools: ["Stripe", "Pricing Strategy", "A/B Testing"]
  }
];