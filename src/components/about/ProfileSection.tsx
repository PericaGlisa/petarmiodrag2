import { Mail } from 'lucide-react';
import { Card } from '../ui/Card';
import { SOCIAL_LINKS } from '../../constants';

export function ProfileSection() {
  return (
    <Card className="mb-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1870930383941857281/pJ8sZXv2_400x400.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-2xl object-cover"
        />
        <div>
          <h1 className="mb-2">About Me</h1>
          <p className="text-gray-300 mb-6">
            Tech visionary weaving pixels and algorithms into seamless experiences. Building tomorrow's SaaS platforms and MVPs today, while turning complex challenges into elegant, user-centric solutions that scale.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label={social.label}
                {...(social.icon !== Mail ? {
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {})}
              >
                <social.icon className="w-5 h-5 text-gray-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}