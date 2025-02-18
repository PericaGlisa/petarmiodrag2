import { ProductPreviewCard } from '../components/products/ProductPreviewCard';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const products = [
  {
    title: "AI Analytics Suite",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-500",
    description: "Advanced analytics powered by artificial intelligence"
  },
  {
    title: "Cloud Workflow Engine",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-emerald-500 to-blue-500",
    description: "Streamline your business processes in the cloud"
  },
  {
    title: "Team Collaboration Platform",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-orange-500 to-pink-500",
    description: "Enhanced team productivity and communication"
  },
  {
    title: "Customer Insights Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    description: "Deep customer behavior analytics and insights"
  },
  {
    title: "DevOps Automation Tool",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-red-500 to-orange-500",
    description: "Streamline your development pipeline"
  },
  {
    title: "Data Security Suite",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    description: "Enterprise-grade security solutions"
  },
  {
    title: "Marketing Automation",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    description: "Automated marketing campaign management"
  },
  {
    title: "Business Intelligence Platform",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
    description: "Data-driven business insights and analytics"
  }
];

export default function Products() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1>My SaaS Product Suite</h1>
          <p className="text-gray-400 text-lg">
            Coming Soon - I'm crafting innovative SaaS products designed to transform your business operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col h-full">
              <ProductPreviewCard {...product} />
              <div className="mt-4 space-y-2">
                <p className="text-gray-400 text-sm">{product.description}</p>
                <Button 
                  disabled 
                  className="w-full opacity-50 cursor-not-allowed"
                >
                  Launching Soon
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}