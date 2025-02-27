import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface TimelineItem {
  iconComponent: LucideIcon;
  iconColor: string;
  title: string;
  date: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
  icon: LucideIcon;
  tools: string[];
}

export interface ToolCategory {
  name: string;
  icon: LucideIcon;
  tools: string[];
}