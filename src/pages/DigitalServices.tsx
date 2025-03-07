import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { CreditCard, ArrowRight, Zap, Palette, Search, Target, Share2, Video, Mail, Code, Globe, BarChart } from 'lucide-react';

interface ServiceTier {
  name: string;
  price: number;
  features: string[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  benefits: string[];
  gradient: string;
  tiers: ServiceTier[];
}

const services: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence',
    icon: Zap,
    gradient: 'from-blue-500 to-purple-500',
    benefits: [
      'Increased brand awareness',
      'Higher conversion rates',
      'Better ROI tracking',
      'Data-driven decisions'
    ],
    tiers: [
      {
        name: 'Starter',
        price: 999,
        features: ['Social media management', 'Basic analytics', 'Monthly reports']
      },
      {
        name: 'Professional',
        price: 1999,
        features: ['Advanced analytics', 'Content strategy', 'Competitor analysis', 'Weekly reports']
      }
    ]
  },
  {
    id: 'brand-design',
    title: 'Brand Design',
    description: 'Create a memorable brand identity that resonates with your audience',
    icon: Palette,
    gradient: 'from-pink-500 to-rose-500',
    benefits: [
      'Unique visual identity',
      'Brand consistency',
      'Professional image',
      'Design system'
    ],
    tiers: [
      {
        name: 'Essential',
        price: 1499,
        features: ['Logo design', 'Color palette', 'Typography', 'Basic guidelines']
      },
      {
        name: 'Premium',
        price: 2999,
        features: ['Full brand identity', 'Style guide', 'Marketing materials', 'Social media templates']
      }
    ]
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    description: 'Improve your search engine rankings and drive organic traffic',
    icon: Search,
    gradient: 'from-green-500 to-emerald-500',
    benefits: [
      'Higher rankings',
      'More organic traffic',
      'Quality backlinks',
      'Local SEO optimization'
    ],
    tiers: [
      {
        name: 'Basic',
        price: 799,
        features: ['Keyword research', 'On-page SEO', 'Monthly reporting']
      },
      {
        name: 'Advanced',
        price: 1599,
        features: ['Technical SEO', 'Content optimization', 'Link building', 'Weekly reporting']
      }
    ]
  },
  {
    id: 'ppc-advertising',
    title: 'PPC Advertising',
    description: 'Targeted paid advertising campaigns that deliver results',
    icon: Target,
    gradient: 'from-orange-500 to-red-500',
    benefits: [
      'Instant visibility',
      'Targeted reach',
      'Measurable results',
      'Budget control'
    ],
    tiers: [
      {
        name: 'Starter',
        price: 899,
        features: ['Campaign setup', 'Basic optimization', 'Monthly reporting']
      },
      {
        name: 'Pro',
        price: 1799,
        features: ['Advanced targeting', 'A/B testing', 'Conversion tracking', 'Weekly optimization']
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Build and engage your social media community',
    icon: Share2,
    gradient: 'from-blue-500 to-cyan-500',
    benefits: [
      'Community growth',
      'Brand engagement',
      'Content strategy',
      'Social listening'
    ],
    tiers: [
      {
        name: 'Essential',
        price: 699,
        features: ['Profile optimization', 'Content calendar', 'Basic engagement']
      },
      {
        name: 'Premium',
        price: 1499,
        features: ['Content creation', 'Community management', 'Paid advertising', 'Analytics']
      }
    ]
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description: 'Create engaging video content for your brand',
    icon: Video,
    gradient: 'from-purple-500 to-indigo-500',
    benefits: [
      'Professional quality',
      'Storytelling',
      'Brand awareness',
      'Social sharing'
    ],
    tiers: [
      {
        name: 'Basic',
        price: 1299,
        features: ['Short-form videos', 'Basic editing', 'Thumbnail design']
      },
      {
        name: 'Premium',
        price: 2499,
        features: ['Long-form content', 'Advanced editing', 'Animation', 'Distribution strategy']
      }
    ]
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Engage your audience with targeted email campaigns',
    icon: Mail,
    gradient: 'from-yellow-500 to-orange-500',
    benefits: [
      'Direct communication',
      'Segmentation',
      'Automation',
      'High ROI'
    ],
    tiers: [
      {
        name: 'Starter',
        price: 599,
        features: ['Template design', 'Basic automation', 'List management']
      },
      {
        name: 'Advanced',
        price: 1299,
        features: ['Custom workflows', 'A/B testing', 'Advanced analytics', 'Integration']
      }
    ]
  },

  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Create valuable content that attracts and retains customers',
    icon: Globe,
    gradient: 'from-teal-500 to-green-500',
    benefits: [
      'Thought leadership',
      'Organic traffic',
      'Lead generation',
      'Brand authority'
    ],
    tiers: [
      {
        name: 'Basic',
        price: 899,
        features: ['Blog posts', 'Social content', 'Basic strategy']
      },
      {
        name: 'Premium',
        price: 1899,
        features: ['Long-form content', 'Ebooks', 'Case studies', 'Distribution']
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Get actionable insights from your digital marketing efforts',
    icon: BarChart,
    gradient: 'from-violet-500 to-purple-500',
    benefits: [
      'Data insights',
      'ROI tracking',
      'Performance metrics',
      'Custom reports'
    ],
    tiers: [
      {
        name: 'Basic',
        price: 499,
        features: ['Monthly reports', 'Basic metrics', 'Goal tracking']
      },
      {
        name: 'Advanced',
        price: 999,
        features: ['Weekly reports', 'Custom dashboards', 'Advanced analytics', 'Recommendations']
      }
    ]
  }
];

export default function DigitalServices() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1>Digital Marketing Services</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Transform your online presence with my comprehensive suite of digital marketing services.
            Each service is tailored to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`group relative overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] bg-[#101726]`}
            >
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gray-800">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="text-gray-400">{service.description}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-white">Key Benefits:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-800">
                  {service.tiers.map((tier, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg text-white">{tier.name}</h4>
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2.5 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}