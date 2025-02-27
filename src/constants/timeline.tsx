import { Rocket, Link as LinkIcon, Timer, Database } from 'lucide-react';
import type { TimelineItem } from '../types';

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    iconComponent: Rocket,
    iconColor: "text-blue-400",
    title: "FeedHive",
    date: "February 2023",
    description: "Launched new analytics"
  },
  {
    iconComponent: LinkIcon,
    iconColor: "text-purple-400",
    title: "LinkGrip",
    date: "October 2023",
    description: "Released beta version"
  },
  {
    iconComponent: Timer,
    iconColor: "text-green-400",
    title: "TimeKiwi",
    date: "January 2023",
    description: "Added team features"
  },
  {
    iconComponent: Database,
    iconColor: "text-orange-400",
    title: "AIBase",
    date: "November 2023",
    description: "Public launch"
  }
];