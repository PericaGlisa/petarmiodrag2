import { useState, FormEvent } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Send } from 'lucide-react';
import { handleFormSubmit } from '../../utils/form';

export function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleFormSubmit(formData, 'email');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Newsletter subscription form">
      <div className="space-y-4" role="group" aria-label="Personal information">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Your Name
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-describedby="name-description"
          />
          <span id="name-description" className="sr-only">Please enter your full name</span>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-describedby="email-description"
          />
          <span id="email-description" className="sr-only">Please enter a valid email address</span>
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full flex items-center justify-center gap-2 py-3"
        aria-label="Subscribe to newsletter"
      >
        <Send size={20} aria-hidden="true" />
        Join the newsletter
      </Button>
    </form>
  );
}