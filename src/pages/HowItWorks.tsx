import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { 
  Package, 
  Palette, 
  Truck, 
  Sparkles, 
  ArrowRight,
  HelpCircle
} from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Choose Your Style",
    description: "Select your favorite gaming genre (RPG, FPS, Indie, or Retro) and your preferred platform (PC, PlayStation, Xbox, or Switch).",
  },
  {
    icon: Package,
    title: "Pick Your Plan",
    description: "Choose between Standard or Premium crates. Add optional extras like bonus snacks, mystery figures, or gaming gear.",
  },
  {
    icon: Truck,
    title: "Get Monthly Loot",
    description: "Your first box ships within 48 hours. Then enjoy a new themed crate every month, packed with exclusive gaming content.",
  },
  {
    icon: Sparkles,
    title: "Unbox & Enjoy",
    description: "Experience the thrill of unboxing collectibles, figures, accessories, snacks, and digital game codes curated just for you.",
  },
];

const faqs = [
  {
    question: "When will my first box ship?",
    answer: "Your first GameCrate ships within 48 hours of subscribing. After that, boxes ship on the 1st of each month.",
  },
  {
    question: "Can I skip a month?",
    answer: "Yes! You can skip any month before the billing date. Just log into your account and pause your subscription. You can resume anytime.",
  },
  {
    question: "What if I don't like an item?",
    answer: "While we can't accept returns on opened items, we have a satisfaction guarantee. Contact us within 7 days if you're unhappy, and we'll make it right.",
  },
  {
    question: "Can I change my genre or platform?",
    answer: "Absolutely! You can update your preferences anytime through your account. Changes apply to your next box.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to over 40 countries. International shipping rates vary by location and are calculated at checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are securely processed.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel anytime through your account settings. No cancellation fees, no questions asked. Your current box will still be delivered.",
  },
  {
    question: "What's the difference between Standard and Premium?",
    answer: "Standard includes 4-6 items and 1 game code. Premium includes 8-12 premium items, 2-3 game codes, early access to new releases, and exclusive member perks.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--accent)/0.15)_0%,_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              How It <span className="text-gradient">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Getting your monthly gaming loot is easy. Choose, subscribe, and enjoy!
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, i) => (
                <Card key={i} variant="glow" className="relative overflow-hidden group">
                  <div className="absolute top-4 right-4 font-display text-6xl font-bold text-primary/10">
                    {i + 1}
                  </div>
                  <CardContent className="p-8 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="neon" size="xl">
                <Link to="/subscribe">
                  Start Your Subscription
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Got questions?</span>
              </div>
              <h2 className="font-display text-4xl font-bold mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`}
                  className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-display font-semibold py-5 hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
