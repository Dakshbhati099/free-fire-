import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

export const ProductCard = ({ title, price, image, badge, popular }: ProductCardProps) => {
  const handleBuyNow = () => {
    console.log('Buy Now clicked for:', title);
    toast.success(`${title} added to cart!`, {
      description: `Price: ${price}`,
    });
  };

  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
      {popular && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
          POPULAR
        </div>
      )}
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold">
          {badge}
        </div>
      )}
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {price}
          </span>
          <Button size="sm" variant="hero" onClick={handleBuyNow}>
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </Button>
        </div>
      </div>
    </Card>
  );
};
