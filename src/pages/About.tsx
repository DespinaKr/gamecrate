import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Zap, Trophy, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-crate.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Gaming",
    description: "We're gamers first. Every item we curate comes from genuine love for the gaming community.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our subscribers shape our boxes. We listen to feedback and evolve with our community.",
  },
  {
    icon: Zap,
    title: "Quality First",
    description: "No filler items. Every piece is handpicked to bring real value and excitement to your collection.",
  },
  {
    icon: Trophy,
    title: "Exclusive Content",
    description: "We partner with studios and artists to bring you items you literally can't find anywhere else.",
  },
];

const team = [
  { name: "Alex Chen", role: "Founder & CEO", quote: "Level 99 gamer, lifelong collector" },
  { name: "Sarah Martinez", role: "Head of Curation", quote: "Finding hidden gems since '95" },
  { name: "Marcus Johnson", role: "Community Lead", quote: "Connecting gamers worldwide" },
  { name: "Emily Park", role: "Creative Director", quote: "Making unboxing magical" },
];

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
              Born from a passion for gaming and collecting, we're on a mission to bring 
              the ultimate unboxing experience to gamers worldwide.
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
                  Our <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    GameCrate started in 2019 in a small apartment in Los Angeles. As lifelong 
                    gamers and collectors, we were frustrated with the generic subscription boxes 
                    that never quite hit the mark.
                  </p>
                  <p>
                    We dreamed of a box that truly understood gamers—one that celebrated specific 
                    genres, respected platform preferences, and delivered items worth collecting.
                  </p>
                  <p>
                    Today, we ship to over 50,000 subscribers in 40+ countries. But our mission 
                    remains the same: curate the most exciting gaming content and deliver it with 
                    the thrill every gamer deserves.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-7xl font-bold text-gradient mb-2">2019</div>
                    <p className="text-muted-foreground">Founded in LA</p>
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
              What We <span className="text-gradient-pink">Stand For</span>
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

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The gamers behind your monthly loot
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <Card key={i} variant="glass">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm italic">"{member.quote}"</p>
                </CardContent>
              </Card>
            ))}
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
            Become part of our community of 50,000+ gamers and start receiving 
            your monthly dose of gaming goodness.
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
