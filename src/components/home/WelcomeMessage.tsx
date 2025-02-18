import { Card } from '../ui/Card';

export function WelcomeMessage() {
  return (
    <Card>
      <div className="chat-message space-y-3 sm:space-y-4">
        <p className="text-white text-lg sm:text-xl font-medium">Hey there ✨</p>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-relaxed">
          Digital architect crafting elegant solutions at the intersection of design and code, specializing in rapid MVP development and scalable SaaS platforms. Where innovation meets execution, you'll find me transforming bold ideas into market-ready products.
        </p>
      </div>
    </Card>
  );
}