import { useState, FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  projectSummary: string;
  budget: string;
  timeline: string;
  source: string;
}

const INDUSTRIES = [
  'Fintech',
  'Healthtech',
  'E-commerce',
  'EdTech'
];

const BUDGETS = [
  'Under $3k',
  '$5k',
  '$10k',
  '$10k–$25k',
  '$25k',
  '$25k–$50k',
  'Custom'
];

const TIMELINES = [
  'ASAP',
  '1–3 Months',
  '3–6 Months',
  '6+ Months'
];

const SOURCES = [
  'Referral',
  'LinkedIn',
  'Twitter',
  'Google Search',
  'Other'
];

const selectClassName = "w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none";
const optionClassName = "bg-gray-900 text-white hover:bg-gray-800";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    projectSummary: '',
    budget: '',
    timeline: '',
    source: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatWhatsAppMessage = (data: FormData): string => {
    const message = `
*New Project Inquiry*

*Contact Information*
Full Name: ${data.fullName}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Company: ${data.companyName}

*Project Details*
${data.industry ? `Industry: ${data.industry}` : ''}
Project Summary: ${data.projectSummary}

*Budget & Timeline*
Budget Range: ${data.budget}
Timeline: ${data.timeline}

*Source*
Found via: ${data.source || 'Not specified'}
    `.trim();

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = formatWhatsAppMessage(formData);
    window.location.href = `https://wa.me/381607400727?text=${whatsappMessage}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name *
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1234567890"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">
            Company Name *
          </label>
          <Input
            id="companyName"
            name="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-1">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className={selectClassName}
        >
          <option value="" className={optionClassName}>Select industry</option>
          {INDUSTRIES.map(industry => (
            <option key={industry} value={industry} className={optionClassName}>{industry}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="projectSummary" className="block text-sm font-medium text-gray-300 mb-1">
          Project Summary *
        </label>
        <textarea
          id="projectSummary"
          name="projectSummary"
          required
          value={formData.projectSummary}
          onChange={handleChange}
          placeholder="Please describe your project idea and main features you'd like to implement"
          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all min-h-[120px]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
            Budget Range *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className={selectClassName}
          >
            <option value="" className={optionClassName}>Select budget range</option>
            {BUDGETS.map(budget => (
              <option key={budget} value={budget} className={optionClassName}>{budget}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
            Timeline *
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            value={formData.timeline}
            onChange={handleChange}
            className={selectClassName}
          >
            <option value="" className={optionClassName}>Select timeline</option>
            {TIMELINES.map(timeline => (
              <option key={timeline} value={timeline} className={optionClassName}>{timeline}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium text-gray-300 mb-1">
          How Did You Hear About Me?
        </label>
        <select
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          className={selectClassName}
        >
          <option value="" className={optionClassName}>Select source</option>
          {SOURCES.map(source => (
            <option key={source} value={source} className={optionClassName}>{source}</option>
          ))}
        </select>
      </div>

      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 py-3"
      >
        <MessageCircle size={20} />
        Send WhatsApp Message
      </Button>
    </form>
  );
}