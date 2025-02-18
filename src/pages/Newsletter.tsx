import { Card } from '../components/ui/Card';
import { NewsletterForm } from '../components/newsletter/NewsletterForm';
import { CreditCard } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="backdrop-blur-xl">
          <div className="text-left mb-8">
            <h1>
              Free Weekly <span className="text-blue-500">SaaS Newsletter</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Join fellow founders and developers for weekly insights on building and growing SaaS products. Practical tips and lessons learned, delivered straight to your inbox.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <NewsletterForm />
          </div>
        </Card>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Premium Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-blue-400 mb-4">€{service.price}</p>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_xclick" />
                    <input type="hidden" name="business" value="petarglisovic@esamurai.net" />
                    <input type="hidden" name="item_name" value={service.name} />
                    <input type="hidden" name="amount" value={service.price} />
                    <input type="hidden" name="currency_code" value="EUR" />
                    <button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      <CreditCard size={18} />
                      Pay with PayPal
                    </button>
                  </form>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {quotes.map((quote, index) => (
            <Card key={index}>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-gray-300 mb-4">{quote.text}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{quote.author}</span>
                    <span className="text-xs text-gray-500">{quote.role}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const quotes = [
  {
    text: "Make something people want.",
    author: "Paul Graham",
    role: "Y Combinator Founder"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "David Heinemeier Hansson",
    role: "Basecamp Co-founder"
  },
  {
    text: "If you are not embarrassed by the first version of your product, you've launched too late.",
    author: "Reid Hoffman",
    role: "LinkedIn Co-founder"
  },
  {
    text: "Innovation is not about saying yes to everything. It's about saying no to all but the most crucial features.",
    author: "Steve Jobs",
    role: "Apple Co-founder"
  }
];

const services = [
  {
    name: "Premium Newsletter",
    description: "Monthly deep dives into SaaS metrics, growth strategies, and case studies",
    price: "29.99"
  },
  {
    name: "MVP Consultation",
    description: "1-hour personal consultation on your MVP strategy and roadmap",
    price: "49.99"
  },
  {
    name: "Startup Bundle",
    description: "Complete guide to launching your SaaS + 3 consultation sessions",
    price: "299.99"
  }
];