import { Card } from '../components/ui/Card';
import { ContactForm } from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Card className="backdrop-blur-xl">
          <div className="text-left mb-8">
            <h1>Let's Connect</h1>
            <p className="text-gray-400">
              Have a question or want to collaborate? Reach out via WhatsApp!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </Card>
      </div>
    </div>
  );
}