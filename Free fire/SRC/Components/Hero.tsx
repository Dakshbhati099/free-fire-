import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const scrollToSection = (sectionId: string) => {
  console.log('Scrolling to section:', sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error('Element not found:', sectionId);
  }
};

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Free Fire Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-dark"></div>
      </div>
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">Instant Delivery</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            FREE FIRE
          </span>
          <br />
          Top-Up Store
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get instant diamonds, exclusive bundles, evo skins, and glow walls. 
          Fast, secure, and available 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="hero" className="text-lg" onClick={() => scrollToSection('diamonds')}>
            Browse Diamonds
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg border-primary/50 hover:border-primary" onClick={() => scrollToSection('bundles')}>
            View Bundles
          </Button>
        </div>
      </div>
    </section>
  );
};
