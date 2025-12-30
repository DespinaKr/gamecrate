import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import HeroCinematic from "@/components/sections/HeroCinematic";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "lucide-react";

import premiumBox from "@/assets/premium-box.jpg";
import standardBox from "@/assets/standard-box.jpg";

// Genres & features & stats (όπως πριν)
const genres = [
    { name: "RPG", icon: Sparkles, color: "text-neon-purple", description: "Epic adventures & fantasy loot" },
    { name: "FPS", icon: Crosshair, color: "text-neon-orange", description: "Tactical gear & action items" },
    { name: "Indie", icon: Joystick, color: "text-neon-green", description: "Unique finds & hidden gems" },
    { name: "Retro", icon: Gamepad2, color: "text-neon-pink", description: "Classic nostalgia & throwbacks" },
];

const features = [
    { icon: Package, title: "Curated Monthly Boxes", description: "Hand-picked collectibles, small merch & useful accessories." },
    { icon: Zap, title: "Digital Bonuses", description: "Occasional keys, DLC or digital extras for major platforms." },
    { icon: Gift, title: "Special Collectibles", description: "Small-batch items and indie artist collabs when available." },
    { icon: Star, title: "Snacks for Sessions", description: "Tasty add-ins to keep the mood (varies by month)." },
];

const stats = [
    { value: "2022", label: "Founded in Greece" },
    { value: "Solo", label: "One-woman project" },
    { value: "2 Tiers", label: "Standard & Premium" },
    { value: "Secure", label: "Trusted Checkout" },
];

const Index = () => {
    return (
        <Layout>
            {/* Hero */}
            <HeroCinematic />

            {/* Stats */}
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
                            Tell me what you like — I tailor each crate to your preferred genres and platform.
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
                                    <div
                                        className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${genre.color}`}
                                    >
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
                            Two tiers. Same care and curation — you choose the scale.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Standard */}
                        <Card variant="glow" className="relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" aria-hidden />
                            <CardHeader className="pb-0">
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <img src={standardBox} alt="Standard Box (illustration)" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" aria-hidden />
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
                                        "4–6 curated items",
                                        "1 small collectible",
                                        "Useful accessories",
                                        "Snack add-in (varies)",
                                        "Occasional digital bonus",
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

                        {/* Premium */}
                        <Card variant="premium" className="relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" aria-hidden />
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase">
                                Most Popular
                            </div>
                            <CardHeader className="pb-0">
                                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                                    <img src={premiumBox} alt="Premium Box (illustration)" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" aria-hidden />
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
                                        "8–12 premium items",
                                        "2–3 special collectibles",
                                        "Higher-end accessories/gear",
                                        "Bigger snack bundle",
                                        "Extra digital bonuses when possible",
                                        "Priority on limited drops",
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
                            Carefully curated content from a gamer for gamers — small-batch, indie-minded and fun to unbox.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <Card key={i} variant="glass" className="group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
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

            {/* CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" aria-hidden />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.1)_0%,_transparent_70%)]" aria-hidden />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            Ready to <span className="text-gradient glow-text">Unbox</span> Your Adventure?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Join an indie, Greece-based project and get thoughtfully curated crates. Your first box ships in the next dispatch cycle.
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
