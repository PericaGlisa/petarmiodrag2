import { 
  Palette, 
  Layout, 
  Database, 
  Server, 
  TestTube, 
  Terminal,
  Video,
  Globe,
  Cloud,
  Search,
  Code2,
  Box,
  Settings,
  Edit3,
  Layers
} from 'lucide-react';
import type { ToolCategory } from '../types';

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    name: "Design",
    icon: Palette,
    tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
  },
  {
    name: "Frontend",
    icon: Layout,
    tools: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    name: "Backend",
    icon: Server,
    tools: ["Laravel", "Express", "NestJS", "GraphQL"]
  },
  {
    name: "Database",
    icon: Database,
    tools: ["PostgreSQL", "Supabase", "Redis", "MongoDB"]
  },
  {
    name: "DevOps",
    icon: Settings,
    tools: ["Docker", "GitHub Actions", "Kubernetes", "Terraform"]
  },
  {
    name: "Testing",
    icon: TestTube,
    tools: ["Jest", "Cypress", "Playwright", "Vitest"]
  },
  {
    name: "Development",
    icon: Code2,
    tools: ["VS Code", "Git", "Postman", "npm"]
  },
  {
    name: "Linux",
    icon: Terminal,
    tools: ["Ubuntu", "Bash", "Vim", "tmux"]
  },
  {
    name: "Content",
    icon: Video,
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "OBS"]
  },
  {
    name: "CMS",
    icon: Edit3,
    tools: ["Strapi", "Sanity", "Ghost", "WordPress"]
  },
  {
    name: "Cloud",
    icon: Cloud,
    tools: ["AWS", "Vercel", "Netlify", "DigitalOcean"]
  },
  {
    name: "PaaS",
    icon: Layers,
    tools: ["Coolify", "Heroku", "Platform.sh", "Railway"]
  },
  {
    name: "Website",
    icon: Globe,
    tools: ["Astro", "Remix", "Gatsby", "Vite"]
  },
  {
    name: "SEO",
    icon: Search,
    tools: ["Google Analytics", "Ahrefs", "Semrush", "Moz"]
  },
  {
    name: "Packages",
    icon: Box,
    tools: ["shadcn/ui", "TanStack Query", "Framer Motion", "Redux Toolkit"]
  }
];