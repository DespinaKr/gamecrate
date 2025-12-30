import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Zap, Trophy, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-crate.jpg";

const values = [
    {
        icon: Heart,
        title: "Independent & Passionate",
        description:
            "GameCrate is a one-woman project by Despina Karakosta — driven by love for games and collecting.",
    },
    {
        icon: Users,
        title: "Community First",
        description:
            "I listen, iterate and shape each crate with real feedback from players in Greece and beyond.",
    },
    {
        icon: Zap,
        title: "Quality Over Hype",
        description:
            "No filler. Curated items and digital goodies that feel worth keeping and using.",
    },
    {
        icon: Trophy,
        title: "Small, Meaningful Drops",
        description:
            "Limited runs, occasional collabs with indie artists, and attention to detail in every box.",
    },
];

const founder = {
    name: "Despina Karakosta",
    role: "Founder • Solo Creator",
    quote:
        "I handle everything — concept, curation, packaging/logistics, support, and the website.",
};

const About = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Gaming collectibles"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            About <span className="text-gradient">GameCrate</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            GameCrate is an independent, one-woman project founded in Greece in 2022.
                            My goal is simple: deliver a thoughtful unboxing experience that speaks to
                            what gamers actually love.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-display text-4xl font-bold mb-6">
                                    The <span className="text-gradient">Story</span>
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        I started GameCrate in 2022 in Greece as a solo creator who wanted a
                                        subscription box that truly respected genres, platforms, and the joy
                                        of collecting.
                                    </p>
                                    <p>
                                        From curation and packing to support and the website, I do it all
                                        myself — keeping things personal, transparent, and crafted with care.
                                    </p>
                                    <p>
                                        If you enjoy indie-minded projects and thoughtful details, you’re in
                                        the right place. Thanks for being here and supporting small creators.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="font-display text-7xl font-bold text-gradient mb-2">
                                            2022
                                        </div>
                                        <p className="text-muted-foreground">Founded in Greece</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-card/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold mb-4">
                            What I <span className="text-gradient-pink">Stand For</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {values.map((value, i) => (
                            <Card key={i} variant="glow" className="group">
                                <CardContent className="p-6 text-center">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold mb-4">
                            Meet the <span className="text-gradient">Founder</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            The person behind your monthly loot
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        <Card variant="glass">
                            <CardContent className="p-6 text-center">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4" />
                                <h3 className="font-display font-bold text-xl">{founder.name}</h3>
                                <p className="text-primary text-sm mb-2">{founder.role}</p>
                                <p className="text-muted-foreground text-sm italic">"{founder.quote}"</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-4xl font-bold mb-6">
                        Ready to Join the <span className="text-gradient">Adventure</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        If you want to support an independent creator from Greece and enjoy
                        thoughtful gaming crates, come aboard.
                    </p>
                    <Button asChild variant="neon" size="xl">
                        <Link to="/subscribe">
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default About;
