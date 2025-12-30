import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Package, 
  Zap, 
  Gift, 
  Star, 
  Gamepad2, 
  Crosshair, 
  Sparkles, 
  Joystick,
  Check,
  ArrowRight,
  Trophy,
  Users,
  ShieldCheck,
  Play
} from "lucide-react";
import heroImage from "@/assets/hero-crate.jpg";
import premiumBox from "@/assets/premium-box.jpg";
import standardBox from "@/assets/standard-box.jpg";

const floatingBoxImages = [
  { src: premiumBox, alt: "Premium Gaming Crate" },
  { src: standardBox, alt: "Standard Gaming Box" },
  { src: heroImage, alt: "Gaming subscription box" },
];

const genres = [
  { name: "RPG", icon: Sparkles, color: "text-neon-purple", description: "Epic adventures & fantasy loot" },
  { name: "FPS", icon: Crosshair, color: "text-neon-orange", description: "Tactical gear & action items" },
  { name: "Indie", icon: Joystick, color: "text-neon-green", description: "Unique finds & hidden gems" },
  { name: "Retro", icon: Gamepad2, color: "text-neon-pink", description: "Classic nostalgia & throwbacks" },
];

const features = [
  { icon: Package, title: "Curated Monthly Boxes", description: "Hand-picked gaming collectibles, figures, and exclusive gear delivered to your door." },
  { icon: Zap, title: "Digital Game Codes", description: "Every box includes Steam, PlayStation, Xbox, or Switch game codes." },
  { icon: Gift, title: "Premium Collectibles", description: "Limited edition figures, art prints, and rare gaming memorabilia." },
  { icon: Star, title: "Energy & Snacks", description: "Fuel your gaming sessions with premium energy drinks and gamer snacks." },
];

const stats = [
  { value: "50K+", label: "Active Subscribers" },
  { value: "200+", label: "Boxes Shipped" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "98%", label: "Happy Gamers" },
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % floatingBoxImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Background Image with Enhanced Effects */}
        <div className="absolute inset-0">
          <motion.img 
            src={heroImage} 
            alt="Gaming subscription box with collectibles"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Multiple gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--secondary)/0.15)_0%,_transparent_50%)]" />
        </div>

        {/* Animated Glow Orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary text-sm font-medium">New January Box Now Available</span>
              </motion.div>
              
              <motion.h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Level Up Your
                <motion.span 
                  className="block text-gradient glow-text"
                  animate={{ 
                    textShadow: [
                      "0 0 20px hsl(var(--primary) / 0.5)",
                      "0 0 40px hsl(var(--primary) / 0.8)",
                      "0 0 20px hsl(var(--primary) / 0.5)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Gaming Experience
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Monthly subscription boxes packed with exclusive collectibles, mini-figures, 
                gaming accessories, energy snacks, and digital game codes.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild variant="neon" size="xl" className="group">
                  <Link to="/subscribe">
                    Start Your Adventure
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="group backdrop-blur-sm">
                  <Link to="/how-it-works" className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    See How It Works
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                className="flex flex-wrap items-center gap-8 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {[
                  { icon: ShieldCheck, text: "Secure Checkout", color: "text-neon-green" },
                  { icon: Trophy, text: "Premium Quality", color: "text-primary" },
                  { icon: Users, text: "50K+ Subscribers", color: "text-secondary" },
                ].map((badge, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  >
                    <badge.icon className={`w-5 h-5 ${badge.color}`} />
                    <span className="text-sm text-muted-foreground">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Featured Box Display */}
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Floating Box Image Carousel */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImageIndex}
                      src={floatingBoxImages[currentImageIndex].src} 
                      alt={floatingBoxImages[currentImageIndex].alt}
                      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </AnimatePresence>
                  {/* Glow effect behind image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-2xl -z-10" />
                </div>
                
                {/* Image Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {floatingBoxImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? "w-6 bg-primary" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Badge Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-neon-green" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">4.9 Rating</p>
                    <p className="text-xs text-muted-foreground">From 5,000+ reviews</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl p-4 shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Gift className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">8-12 Items</p>
                    <p className="text-xs text-muted-foreground">In every Premium box</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div 
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/30 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Genre */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-gradient">Genre</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every crate is tailored to your gaming preferences. Pick your favorite genre and platform for a personalized experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {genres.map((genre, i) => (
              <Card 
                key={genre.name} 
                variant="glow" 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${genre.color}`}>
                    <genre.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">{genre.name}</h3>
                  <p className="text-muted-foreground text-sm">{genre.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-24 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Pick Your <span className="text-gradient-pink">Plan</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From casual collectors to hardcore gamers, we have the perfect crate for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Plan */}
            <Card variant="glow" className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <CardHeader className="pb-0">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img src={standardBox} alt="Standard Box" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <CardTitle className="text-3xl">Standard Crate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-primary">€29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "4-6 curated items",
                    "1 collectible figure",
                    "Gaming accessories",
                    "Energy snacks pack",
                    "1 digital game code",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/subscribe">Choose Standard</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card variant="premium" className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase">
                Most Popular
              </div>
              <CardHeader className="pb-0">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img src={premiumBox} alt="Premium Box" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <CardTitle className="text-3xl">Premium Crate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-secondary">€59</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "8-12 premium items",
                    "2-3 exclusive figures",
                    "Premium gaming gear",
                    "Deluxe snack bundle",
                    "2-3 digital game codes",
                    "Early access to new releases",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="pink" className="w-full">
                  <Link to="/subscribe">Choose Premium</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What's Inside <span className="text-gradient">Every Crate</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each box is carefully curated with exclusive gaming content you won't find anywhere else.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card 
                key={i} 
                variant="glass" 
                className="group animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.1)_0%,_transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-gradient glow-text">Unbox</span> Your Adventure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of gamers receiving exclusive loot every month. 
              Subscribe now and get your first crate shipped within 48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="neon" size="xl">
                <Link to="/subscribe">
                  Subscribe Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/gift">Gift a Crate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
