import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductPreviewCard } from './ProductPreviewCard';
import { Button } from '../ui/Button';

const previewProducts = [
  {
    title: "AI Analytics Suite",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-500"
  },
  {
    title: "Cloud Workflow Engine",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-emerald-500 to-blue-500"
  },
  {
    title: "Team Collaboration Platform",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-orange-500 to-pink-500"
  },
  {
    title: "Customer Insights Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
  }
];

export function ProductsPreviewSection() {
  return (
    <section className="space-y-6" aria-labelledby="portfolio-title">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 id="portfolio-title" className="mb-2">Digital Product Portfolio</h2>
          <p className="text-gray-400" role="status">My innovative SaaS solutions are being prepared and will be available shortly.</p>
        </div>
        <Button 
          as={Link} 
          to="/products" 
          className="flex items-center justify-center gap-2 whitespace-nowrap"
          aria-label="View all products"
        >
          All Products
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewProducts.map((product, index) => (
          <ProductPreviewCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}