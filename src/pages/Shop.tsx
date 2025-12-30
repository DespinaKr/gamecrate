import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Plus, Package, Star } from "lucide-react";
import premiumBox from "@/assets/premium-box.jpg";
import standardBox from "@/assets/standard-box.jpg";

const pastBoxes = [
  { id: 1, name: "January 2024 - Cyber Quest", theme: "RPG", price: 45, image: premiumBox, rating: 4.9 },
  { id: 2, name: "December 2023 - Winter Warfare", theme: "FPS", price: 42, image: standardBox, rating: 4.8 },
  { id: 3, name: "November 2023 - Pixel Legends", theme: "Retro", price: 40, image: premiumBox, rating: 4.9 },
  { id: 4, name: "October 2023 - Haunted Realms", theme: "Indie", price: 38, image: standardBox, rating: 4.7 },
  { id: 5, name: "September 2023 - Space Raiders", theme: "FPS", price: 42, image: premiumBox, rating: 4.8 },
  { id: 6, name: "August 2023 - Summer Quest", theme: "RPG", price: 40, image: standardBox, rating: 4.6 },
];

const addOns = [
  { id: 1, name: "Energy Drink Bundle", description: "6-pack premium gaming energy drinks", price: 18, category: "Snacks" },
  { id: 2, name: "Mystery Figure", description: "Exclusive collectible figure (random)", price: 25, category: "Collectibles" },
  { id: 3, name: "LED Controller Stand", description: "RGB lighting display stand", price: 35, category: "Accessories" },
  { id: 4, name: "Gaming Mousepad XL", description: "Extended size with RGB edges", price: 29, category: "Accessories" },
  { id: 5, name: "Snack Mega Pack", description: "12 assorted gaming snacks", price: 22, category: "Snacks" },
  { id: 6, name: "Art Print Collection", description: "3 exclusive game art prints", price: 19, category: "Collectibles" },
  { id: 7, name: "Cable Management Kit", description: "RGB cable ties and organizers", price: 15, category: "Accessories" },
  { id: 8, name: "Sticker Pack", description: "25+ gaming stickers", price: 12, category: "Collectibles" },
];

const Shop = () => {
  const [cart, setCart] = useState<{ id: number; type: 'box' | 'addon'; quantity: number }[]>([]);

  const addToCart = (id: number, type: 'box' | 'addon') => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id && item.type === type);
      if (existing) {
        return prev.map(item => 
          item.id === id && item.type === type 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { id, type, quantity: 1 }];
    });
  };

  const cartTotal = cart.reduce((sum, item) => {
    if (item.type === 'box') {
      const box = pastBoxes.find(b => b.id === item.id);
      return sum + (box?.price || 0) * item.quantity;
    }
    const addon = addOns.find(a => a.id === item.id);
    return sum + (addon?.price || 0) * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--secondary)/0.15)_0%,_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              The <span className="text-gradient-pink">Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Missed a box? Want extra loot? Browse our collection of past crates and exclusive add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button variant="neon" size="lg" className="shadow-lg">
            <ShoppingCart className="w-5 h-5" />
            {cartCount} items - €{cartTotal}
          </Button>
        </div>
      )}

      {/* Shop Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="past-boxes" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="past-boxes" className="font-display">Past Boxes</TabsTrigger>
              <TabsTrigger value="add-ons" className="font-display">Add-Ons</TabsTrigger>
            </TabsList>

            <TabsContent value="past-boxes">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastBoxes.map((box) => (
                  <Card key={box.id} variant="glow" className="overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={box.image} 
                        alt={box.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold">
                        {box.theme}
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 text-sm">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        {box.rating}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-display font-bold text-lg mb-2">{box.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl font-bold text-primary">${box.price}</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => addToCart(box.id, 'box')}
                        >
                          <Plus className="w-4 h-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="add-ons">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addOns.map((addon) => (
                  <Card key={addon.id} variant="glass" className="group">
                    <CardContent className="p-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4">
                        <Package className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">{addon.category}</span>
                      <h3 className="font-display font-bold text-lg mt-1 mb-2">{addon.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xl font-bold text-secondary">${addon.price}</span>
                        <Button 
                          variant="secondary" 
                          size="sm"
                          onClick={() => addToCart(addon.id, 'addon')}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
