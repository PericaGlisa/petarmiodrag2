import { Card } from '../ui/Card';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: "AI-Powered Support",
    description: "Intelligent customer service automation for SaaS",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    link: "#"
  },
  {
    title: "Social Media Manager",
    description: "Create and schedule content with AI",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400",
    link: "#"
  }
];

export function ProductsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2>My SaaS Products</h2>
        <a href="#" className="flex items-center gap-1">
          All Products <ArrowRight size={16} />
        </a>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity"
            />
            <h3>{product.title}</h3>
            <p className="text-gray-400 text-sm">{product.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}