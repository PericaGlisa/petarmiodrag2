import { Card } from '../components/ui/Card';

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Card className="backdrop-blur-xl">
          <h1 className="mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service and my Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Use License</h2>
              <p>Permission is granted to temporarily access the materials on my website for personal, non-commercial use only.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
              <p>The materials on my website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim all other warranties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Limitations</h2>
              <p>I shall not be held liable for any damages arising from the use or inability to use my website's materials.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Revisions</h2>
              <p>I may revise these terms of service at any time without notice. By continuing to use this website, you agree to be bound by the current version.</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}