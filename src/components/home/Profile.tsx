import { Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Profile() {
  return (
    <div className="lg:sticky lg:top-24 glass-card p-4 sm:p-6 mb-8 lg:mb-0 hover-scale">
      <div className="flex items-start lg:block">
        <img
          src="https://pbs.twimg.com/profile_images/1870930383941857281/pJ8sZXv2_400x400.jpg"
          alt="Petar Glišović - Digital Product Designer and Developer"
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-full lg:h-auto rounded-2xl object-cover mb-0 lg:mb-6 mr-4 lg:mr-0 border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors"
        />
        <div className="lg:text-center flex-1 space-y-2 sm:space-y-3 lg:space-y-4">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
            I'm Petar <span className="text-yellow-500">👋</span>
          </h1>
          <p className="text-gray-400 text-sm lg:text-base mb-2 hidden lg:block">
            Digital craftsman designing and developing innovative SaaS products. From pixel-perfect interfaces to rapid MVPs, creating experiences that matter.
          </p>
          <p className="text-blue-400 text-sm lg:text-base mb-4 hidden lg:block">
            Designer • Developer • Product Builder
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:justify-center">
            {[
              { icon: Mail, href: 'mailto:petarglisovic@esamurai.net' },
              { icon: Facebook, href: 'https://www.facebook.com/pericaglisa/' },
              { icon: Instagram, href: 'https://www.instagram.com/pericaglisa/' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/petarglisovic/' },
              { icon: Twitter, href: 'https://x.com/pericaglisa' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
                {...(social.icon !== Mail ? {
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {})}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}