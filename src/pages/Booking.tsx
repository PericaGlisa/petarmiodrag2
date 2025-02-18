import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { Card } from '../components/ui/Card';
import { Coffee, CreditCard } from 'lucide-react';

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#080B12" },
          dark: { "cal-brand": "#3B81F3" }
        },
        hideEventTypeDetails: false,
        layout: "month_view",
        hideBranding: true
      });
    })();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1>Book a Call</h1>
          <p className="text-gray-400 text-lg">
            Book a time slot that works best for you. Looking forward to our conversation!
          </p>
        </div>

        <div className="h-[800px] overflow-hidden mb-12">
          <Cal
            namespace="15min"
            calLink="petarmiodrag2/15min"
            style={{
              width: "100%",
              height: "800px",
              overflow: "scroll"
            }}
            config={{
              layout: "month_view",
              theme: "dark",
              hideBranding: true
            }}
          />
        </div>

        {/* Buy me a coffee section */}
        <Card className="max-w-xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Coffee className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold text-white m-0">Buy me a coffee</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            Enjoying my content? Help keep it coming! ☕ Your support helps me create more valuable resources.
          </p>

          <div className="space-y-4">
            {[5, 10, 15].map((amount) => (
              <form 
                key={amount}
                action="https://www.paypal.com/cgi-bin/webscr" 
                method="post" 
                target="_blank"
                className="w-full"
              >
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="petarglisovic@esamurai.net" />
                <input type="hidden" name="item_name" value={`Buy me ${amount === 5 ? 'a' : amount/5} coffee${amount > 5 ? 's' : ''}`} />
                <input type="hidden" name="amount" value={amount} />
                <input type="hidden" name="currency_code" value="EUR" />
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <CreditCard size={18} />
                  Buy me {amount === 5 ? 'a' : amount/5} coffee{amount > 5 ? 's' : ''} (€{amount})
                </button>
              </form>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}