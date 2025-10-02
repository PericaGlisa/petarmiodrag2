import { Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import type { SocialLink } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Mail, href: 'mailto:petarglisovic@esamurai.net', label: 'Email' },
  { icon: Facebook, href: 'https://www.facebook.com/pericaglisa/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/pericaglisa/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/petarglisovic/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/pericaglisa', label: 'Twitter' }
];