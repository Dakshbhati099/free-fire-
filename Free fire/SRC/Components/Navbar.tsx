import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import { toast } from "sonner";

const scrollToSection = (sectionId: string) => {
  console.log('Navbar: Scrolling to section:', sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error('Navbar: Element not found:', sectionId);
  }
};

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center font-black text-xl">
              FF
            </div>
            <span className="font-black text-xl bg-gradient-primary bg-clip-text text-transparent">
              FREE FIRE STORE
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('diamonds')} className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              Diamonds
            </button>
            <button onClick={() => scrollToSection('bundles')} className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              Bundles
            </button>
            <button onClick={() => scrollToSection('evo-skins')} className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              Evo Skins
            </button>
            <button onClick={() => scrollToSection('glow-walls')} className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              Glow Walls
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => toast.info("Cart is empty", { description: "Add items to your cart to continue" })}
            >
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button 
              variant="gaming" 
              size="sm"
              onClick={() => toast.info("Login feature coming soon!", { description: "Stay tuned for user accounts" })}
            >
              <User className="w-4 h-4" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
