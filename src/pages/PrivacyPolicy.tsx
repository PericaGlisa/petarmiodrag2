import { Card } from '../components/ui/Card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Card className="backdrop-blur-xl">
          <h1 className="mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold mb-3">Information Collection</h2>
              <p>I collect information you provide directly to me when using my services, including contact information and usage data to improve your experience.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Usage</h2>
              <p>Your data is used to provide, maintain, and improve my services, communicate with you, and ensure security.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
              <p>I implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Cookies</h2>
              <p>I use cookies and similar technologies to enhance your browsing experience and analyze website traffic.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Updates</h2>
              <p>I may update this privacy policy from time to time. I will notify you of any changes by posting the new policy on this page.</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}