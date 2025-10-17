import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { Gem, Package, Palette, Sparkles } from "lucide-react";

const Index = () => {
  const diamondPackages = [
    { title: "100 Diamonds", price: "$0.99", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=400&fit=crop", badge: "STARTER" },
    { title: "310 Diamonds", price: "$2.99", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=400&fit=crop" },
    { title: "520 Diamonds", price: "$4.99", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=400&fit=crop", popular: true },
    { title: "1060 Diamonds", price: "$9.99", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=400&fit=crop" },
    { title: "2180 Diamonds", price: "$19.99", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=400&fit=crop" },
    { title: "5600 Diamonds", price: "$49.99", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=400&fit=crop", badge: "BEST VALUE" },
  ];

  const bundles = [
    { title: "Survivor Pass Elite", price: "$9.99", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop" },
    { title: "Booyah Bundle", price: "$14.99", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop", popular: true },
    { title: "Legendary Bundle", price: "$24.99", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop" },
    { title: "Ultimate Pack", price: "$39.99", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop", badge: "LIMITED" },
  ];

  const evoSkins = [
    { title: "Desert Eagle Evo", price: "$7.99", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop" },
    { title: "M1014 Evo", price: "$7.99", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop", popular: true },
    { title: "MP40 Evo", price: "$7.99", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop" },
    { title: "AK47 Evo", price: "$9.99", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop", badge: "HOT" },
  ];

  const glowWalls = [
    { title: "Neon City", price: "$4.99", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop" },
    { title: "Cyber Grid", price: "$4.99", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop", popular: true },
    { title: "Phoenix Rising", price: "$5.99", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop" },
    { title: "Galaxy Storm", price: "$5.99", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop", badge: "NEW" },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <Hero />
      
      {/* Diamonds Section */}
      <section id="diamonds" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-4">
              <Gem className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">Diamond Top-Up</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Get Diamonds Now
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">Choose your package and power up instantly</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diamondPackages.map((pkg, index) => (
              <ProductCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="bundles" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/50 rounded-full px-4 py-2 mb-4">
              <Package className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold">Exclusive Bundles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Premium Bundles
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">Unlock exclusive content and rewards</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundles.map((bundle, index) => (
              <ProductCard key={index} {...bundle} />
            ))}
          </div>
        </div>
      </section>

      {/* Evo Skins Section */}
      <section id="evo-skins" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/50 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Evolution Skins</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Evo Weapon Skins
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">Upgrade your arsenal with evolution skins</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {evoSkins.map((skin, index) => (
              <ProductCard key={index} {...skin} />
            ))}
          </div>
        </div>
      </section>

      {/* Glow Walls Section */}
      <section id="glow-walls" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-4">
              <Palette className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">Glow Walls</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Glow Wall Collection
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">Stand out with stunning glow wall effects</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {glowWalls.map((wall, index) => (
              <ProductCard key={index} {...wall} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2024 Free Fire Store. Fast & Secure Top-Up Service.</p>
          <p className="text-xs mt-2">This is an unofficial fan-made store. Not affiliated with Garena.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
