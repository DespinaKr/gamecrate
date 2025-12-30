import { Link } from "react-router-dom";
import { Mail, MapPin, Twitter, Instagram, Youtube, Twitch } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border/30 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-flex items-center">
                            <img
                                src={logo}
                                alt="GameCrate logo"
                                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                            />
                        </Link>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Independent, one-woman project by <strong>Despina Karakosta</strong>. Founded in
                            <strong> Greece</strong> (2022). Thoughtful gaming crates with collectibles & digital goodies.
                        </p>

                        <div className="flex gap-3">
                            {[Twitter, Instagram, Youtube, Twitch].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                                    aria-label="social"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { to: "/plans", label: "Plans" },
                                { to: "/gift", label: "Gift a Crate" },
                                { to: "/subscribe", label: "Subscribe Now" },
                                { to: "/how-it-works", label: "How It Works" },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-display font-bold text-foreground mb-4">Support</h4>
                        <ul className="space-y-3">
                            {[
                                { to: "/how-it-works", label: "FAQ" },
                                { to: "/contact", label: "Contact" },
                                { to: "/how-it-works#shipping", label: "Shipping Info" },
                                { to: "/terms#returns", label: "Returns Policy" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.to}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-foreground mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Mail className="w-4 h-4 text-primary" />
                                <a href="mailto:hello@gamecrate.gr" className="hover:underline">
                                    hello@gamecrate.gr
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground text-sm">
                                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                                Athens, Greece<br />One-woman project
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm">
                        © 2022–{year} GameCrate — Made in Greece.
                    </p>
                    <div className="flex gap-6">
                        {[
                            { to: "/privacy", label: "Privacy Policy" },
                            { to: "/terms", label: "Terms of Service" },
                            { to: "/cookies", label: "Cookie Policy" },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

