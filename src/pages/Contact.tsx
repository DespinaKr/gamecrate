import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Mail,
    MapPin,
    Clock,
    MessageSquare,
    Send,
    Instagram,
    Twitter,
    Youtube,
    Twitch,
} from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        title: "Email Support",
        description: "hello@gamecrate.gr",
        action: "I usually reply within 24–48h",
    },
    {
        icon: Instagram,
        title: "Instagram DMs",
        description: "@gamecrategr",
        action: "Message me for quick questions",
    },
    {
        icon: MessageSquare,
        title: "Contact Form",
        description: "Use the form below",
        action: "I’ll get back to you by email",
    },
];

const Contact = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                            Get in <span className="text-gradient">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            I’m Despina, the solo creator behind GameCrate (founded in Greece, 2022).
                            Questions, feedback, or collabs? Reach out anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {contactMethods.map((method, i) => (
                            <Card key={i} variant="glow" className="text-center">
                                <CardContent className="p-6">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                                        <method.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg mb-2">{method.title}</h3>
                                    <p className="text-foreground font-medium mb-1">{method.description}</p>
                                    <p className="text-muted-foreground text-sm">{method.action}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact-form" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Form */}
                        <Card variant="glass" className="p-8">
                            <h2 className="font-display text-2xl font-bold mb-6">Send Me a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-muted-foreground mb-2 block">First Name</label>
                                        <Input placeholder="Your first name" className="bg-card" />
                                    </div>
                                    <div>
                                        <label className="text-sm text-muted-foreground mb-2 block">Last Name</label>
                                        <Input placeholder="Your last name" className="bg-card" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                                    <Input type="email" placeholder="you@example.com" className="bg-card" />
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                                    <Input placeholder="How can I help?" className="bg-card" />
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                                    <Textarea
                                        placeholder="Tell me more..."
                                        className="bg-card min-h-[150px]"
                                    />
                                </div>
                                <Button variant="neon" size="lg" className="w-full">
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </Button>
                            </form>
                        </Card>

                        {/* Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-display text-2xl font-bold mb-6">Other Details</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Base</h3>
                                            <p className="text-muted-foreground">
                                                Athens, Greece<br />
                                                Independent / One-woman project
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Support Hours (EET)</h3>
                                            <p className="text-muted-foreground">
                                                Mon – Fri: 10:00 – 18:00<br />
                                                Sat – Sun: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-display font-bold text-lg mb-4">Follow</h3>
                                <div className="flex gap-3">
                                    {[
                                        { icon: Instagram, label: "Instagram" },
                                        { icon: Twitter, label: "Twitter" },
                                        { icon: Youtube, label: "YouTube" },
                                        { icon: Twitch, label: "Twitch" },
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <Card variant="glow" className="p-6">
                                <h3 className="font-display font-bold text-lg mb-2">Need Immediate Help?</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Check the FAQ for instant answers to common questions.
                                </p>
                                <Button variant="outline" size="sm" asChild>
                                    <a href="/how-it-works">View FAQ</a>
                                </Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;

