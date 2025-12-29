import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Check, 
  Sparkles, 
  Crosshair, 
  Joystick, 
  Gamepad2,
  Monitor,
  Gamepad,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import premiumBox from "@/assets/premium-box.jpg";
import standardBox from "@/assets/standard-box.jpg";

const genres = [
  { id: "rpg", name: "RPG", icon: Sparkles, description: "Fantasy & adventure loot" },
  { id: "fps", name: "FPS", icon: Crosshair, description: "Tactical action gear" },
  { id: "indie", name: "Indie", icon: Joystick, description: "Unique hidden gems" },
  { id: "retro", name: "Retro", icon: Gamepad2, description: "Classic nostalgia" },
];

const platforms = [
  { id: "pc", name: "PC", icon: Monitor },
  { id: "playstation", name: "PlayStation", icon: Gamepad },
  { id: "xbox", name: "Xbox", icon: Gamepad },
  { id: "switch", name: "Switch", icon: Gamepad },
];

const plans = [
  {
    id: "standard",
    name: "Standard Crate",
    price: 29,
    image: standardBox,
    features: [
      "4-6 curated items per box",
      "1 collectible figure",
      "Gaming accessories",
      "Energy snacks pack",
      "1 digital game code",
      "Free shipping",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Crate",
    price: 49,
    image: premiumBox,
    features: [
      "8-12 premium items per box",
      "2-3 exclusive figures",
      "Premium gaming gear",
      "Deluxe snack bundle",
      "2-3 digital game codes",
      "Early access to new releases",
      "Exclusive member discounts",
      "Priority shipping",
    ],
    popular: true,
  },
];

const addOns = [
  { id: "extra-snacks", name: "Extra Snacks Pack", price: 9 },
  { id: "mystery-figure", name: "Mystery Figure", price: 15 },
  { id: "gaming-gear", name: "Bonus Gaming Gear", price: 19 },
];

const Subscribe = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const planPrice = plans.find(p => p.id === selectedPlan)?.price || 0;
    const addOnTotal = selectedAddOns.reduce((sum, id) => {
      const addOn = addOns.find(a => a.id === id);
      return sum + (addOn?.price || 0);
    }, 0);
    return planPrice + addOnTotal;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Build Your <span className="text-gradient">Perfect Crate</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your genre, select your platform, and pick your plan. 
              Customize your gaming experience with optional add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* Customization Steps */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Step 1: Genre */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground">
                1
              </div>
              <h2 className="font-display text-3xl font-bold">Choose Your Genre</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {genres.map((genre) => (
                <Card
                  key={genre.id}
                  variant={selectedGenre === genre.id ? "glow" : "default"}
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    selectedGenre === genre.id && "ring-2 ring-primary"
                  )}
                  onClick={() => setSelectedGenre(genre.id)}
                >
                  <CardContent className="p-6 text-center">
                    <genre.icon className={cn(
                      "w-10 h-10 mx-auto mb-3 transition-colors",
                      selectedGenre === genre.id ? "text-primary" : "text-muted-foreground"
                    )} />
                    <h3 className="font-display font-bold text-lg">{genre.name}</h3>
                    <p className="text-muted-foreground text-sm">{genre.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Step 2: Platform */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-secondary-foreground">
                2
              </div>
              <h2 className="font-display text-3xl font-bold">Select Your Platform</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform) => (
                <Card
                  key={platform.id}
                  variant={selectedPlatform === platform.id ? "premium" : "default"}
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    selectedPlatform === platform.id && "ring-2 ring-secondary"
                  )}
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  <CardContent className="p-6 text-center">
                    <platform.icon className={cn(
                      "w-10 h-10 mx-auto mb-3 transition-colors",
                      selectedPlatform === platform.id ? "text-secondary" : "text-muted-foreground"
                    )} />
                    <h3 className="font-display font-bold text-lg">{platform.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Step 3: Plan */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-display font-bold text-accent-foreground">
                3
              </div>
              <h2 className="font-display text-3xl font-bold">Pick Your Plan</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  variant={plan.popular ? "premium" : "glow"}
                  className={cn(
                    "cursor-pointer transition-all duration-300 relative overflow-hidden",
                    selectedPlan === plan.id && "ring-2",
                    selectedPlan === plan.id && plan.popular ? "ring-secondary" : selectedPlan === plan.id ? "ring-primary" : ""
                  )}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-0">
                    <div className="h-40 rounded-xl overflow-hidden mb-4">
                      <img src={plan.image} alt={plan.name} className="w-full h-full object-cover" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className={cn(
                        "font-display text-4xl font-bold",
                        plan.popular ? "text-secondary" : "text-primary"
                      )}>
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className={cn(
                            "w-4 h-4",
                            plan.popular ? "text-secondary" : "text-primary"
                          )} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Step 4: Add-ons */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-display font-bold text-muted-foreground">
                4
              </div>
              <h2 className="font-display text-3xl font-bold">Optional Add-ons</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
              {addOns.map((addOn) => (
                <Card
                  key={addOn.id}
                  variant={selectedAddOns.includes(addOn.id) ? "glow" : "default"}
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    selectedAddOns.includes(addOn.id) && "ring-2 ring-primary"
                  )}
                  onClick={() => toggleAddOn(addOn.id)}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{addOn.name}</h3>
                      <p className="text-primary font-display font-bold">+${addOn.price}</p>
                    </div>
                    <div className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                      selectedAddOns.includes(addOn.id) 
                        ? "bg-primary border-primary" 
                        : "border-muted-foreground"
                    )}>
                      {selectedAddOns.includes(addOn.id) && (
                        <Check className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="max-w-2xl mx-auto">
            <Card variant="glass" className="p-8">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Genre:</span>
                  <span className="font-semibold">{selectedGenre ? genres.find(g => g.id === selectedGenre)?.name : "Not selected"}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Platform:</span>
                  <span className="font-semibold">{selectedPlatform ? platforms.find(p => p.id === selectedPlatform)?.name : "Not selected"}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Plan:</span>
                  <span className="font-semibold">{selectedPlan ? plans.find(p => p.id === selectedPlan)?.name : "Not selected"}</span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">Add-ons:</span>
                    <span className="font-semibold">{selectedAddOns.length} selected</span>
                  </div>
                )}
                <div className="border-t border-border pt-4 flex justify-between text-2xl">
                  <span className="font-display font-bold">Total:</span>
                  <span className="font-display font-bold text-gradient">${calculateTotal()}/month</span>
                </div>
              </div>
              <Button 
                variant="neon" 
                size="xl" 
                className="w-full"
                disabled={!selectedGenre || !selectedPlatform || !selectedPlan}
              >
                Complete Subscription
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-center text-muted-foreground text-sm mt-4">
                Cancel anytime. First box ships within 48 hours.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subscribe;
