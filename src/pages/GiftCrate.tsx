import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gift, Heart, Check, ArrowRight, Calendar, Sparkles, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import premiumBox from "@/assets/premium-box.jpg";

const giftPlans = [
  { id: "3month", duration: "3 Months", price: 129, savings: "Save $8", perMonth: 43 },
  { id: "6month", duration: "6 Months", price: 249, savings: "Save $25", perMonth: 41, popular: true },
  { id: "12month", duration: "12 Months", price: 469, savings: "Save $79", perMonth: 39 },
];

const GiftCrate = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>("6month");
  const [selectedTier, setSelectedTier] = useState<"standard" | "premium">("premium");

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--secondary)/0.15)_0%,_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
              <Gift className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-medium">Perfect for any gamer</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Gift a <span className="text-gradient-pink glow-text-pink">Crate</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Give the gift of monthly gaming loot. Choose a subscription duration and 
              let your favorite gamer enjoy curated boxes of awesome content.
            </p>
          </div>
        </div>
      </section>

      {/* Gift Configuration */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Tier Selection */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-6 text-center">Choose Tier</h2>
              <div className="flex justify-center gap-4">
                {[
                  { id: "standard", name: "Standard", price: 29 },
                  { id: "premium", name: "Premium", price: 49 },
                ].map((tier) => (
                  <Button
                    key={tier.id}
                    variant={selectedTier === tier.id ? "neon" : "outline"}
                    size="lg"
                    onClick={() => setSelectedTier(tier.id as "standard" | "premium")}
                  >
                    {tier.name} (${tier.price}/mo)
                  </Button>
                ))}
              </div>
            </div>

            {/* Duration Selection */}
            <div className="mb-12">
              <h2 className="font-display text-2xl font-bold mb-6 text-center">Select Duration</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {giftPlans.map((plan) => {
                  const totalPrice = selectedTier === "premium" 
                    ? Math.round(plan.price * 1.6) 
                    : plan.price;
                  
                  return (
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
                          Best Value
                        </div>
                      )}
                      <CardContent className="p-6 text-center">
                        <Calendar className={cn(
                          "w-10 h-10 mx-auto mb-4",
                          plan.popular ? "text-secondary" : "text-primary"
                        )} />
                        <h3 className="font-display text-2xl font-bold mb-2">{plan.duration}</h3>
                        <div className={cn(
                          "font-display text-4xl font-bold mb-2",
                          plan.popular ? "text-secondary" : "text-primary"
                        )}>
                          ${totalPrice}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{plan.savings}</p>
                        <div className={cn(
                          "w-6 h-6 rounded-full border-2 mx-auto flex items-center justify-center",
                          selectedPlan === plan.id 
                            ? plan.popular ? "bg-secondary border-secondary" : "bg-primary border-primary"
                            : "border-muted-foreground"
                        )}>
                          {selectedPlan === plan.id && (
                            <Check className="w-4 h-4 text-primary-foreground" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Gift Form */}
            <Card variant="glass" className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-secondary" />
                    Recipient Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Recipient Name</label>
                      <Input placeholder="Their name" className="bg-card" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Recipient Email</label>
                      <Input type="email" placeholder="their.email@example.com" className="bg-card" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Delivery Date</label>
                      <Input type="date" className="bg-card" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-secondary" />
                    Personal Message
                  </h3>
                  <Textarea 
                    placeholder="Write a personal message for the gift card email..."
                    className="bg-card min-h-[150px]"
                  />
                  <div className="mt-4 p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Mail className="w-4 h-4" />
                      A digital gift card will be sent to the recipient
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-muted-foreground">Total Gift Value</p>
                  <p className="font-display text-3xl font-bold text-gradient-pink">
                    ${selectedPlan ? (selectedTier === "premium" ? Math.round(giftPlans.find(p => p.id === selectedPlan)!.price * 1.6) : giftPlans.find(p => p.id === selectedPlan)!.price) : 0}
                  </p>
                </div>
                <Button variant="pink" size="xl">
                  Purchase Gift
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Gift */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img src={premiumBox} alt="Gift box" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                The Perfect Gift for <span className="text-gradient-pink">Any Gamer</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Recipient chooses their genre & platform",
                  "Digital gift card delivered instantly or scheduled",
                  "Include a personal message",
                  "No commitment for the recipient after gift ends",
                  "Full refund if unused within 30 days",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GiftCrate;
