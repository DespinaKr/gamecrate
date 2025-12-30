import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck, Trophy, Users } from "lucide-react";
import heroLanding from "@/assets/hero-landing.jpg";

/** Σκοτεινό feather ΜΟΝΟ στα άκρα, ώστε να μη φαίνεται “κόψιμο”, χωρίς να αλλάζει η διάσταση. */
function EdgeFeather() {
    const bg = "hsl(var(--background) / 0.92)";
    return (
        <div
            aria-hidden
            className="absolute inset-0 pointer-events-none z-[20]"
            style={{
                background:
                // αριστερά & δεξιά (24px ζώνη feather)
                    `linear-gradient(to right, ${bg} 0, transparent 60%) left/24px 100% no-repeat,
           linear-gradient(to left,  ${bg} 0, transparent 60%) right/24px 100% no-repeat,
           linear-gradient(to bottom, ${bg} 0, transparent 60%) top/100% 24px no-repeat,
           linear-gradient(to top,    ${bg} 0, transparent 60%) bottom/100% 24px no-repeat`,
                opacity: 0.55,
                mixBlendMode: "normal",
            }}
        />
    );
}

/** Μικρά neon flares στις γωνίες (έντονα αλλά τοπικά, δεν “ξεπλένουν” το φόντο). */
function NeonCorners() {
    const base = {
        position: "absolute" as const,
        width: "120px",
        height: "120px",
        filter: "blur(10px)",
        mixBlendMode: "screen" as const,
    };
    return (
        <>
            <motion.div
                aria-hidden
                style={{
                    ...base,
                    left: 8,
                    top: 8,
                    background: "radial-gradient(closest-side, rgba(168,85,247,.45), transparent 65%)",
                }}
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                aria-hidden
                style={{
                    ...base,
                    right: 8,
                    top: 8,
                    background: "radial-gradient(closest-side, rgba(56,189,248,.45), transparent 65%)",
                }}
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [1.02, 1.08, 1.02] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
                aria-hidden
                style={{
                    ...base,
                    left: 12,
                    bottom: 12,
                    background: "radial-gradient(closest-side, rgba(16,185,129,.45), transparent 65%)",
                    width: "140px",
                    height: "140px",
                }}
                animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.06, 1] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
            />
            <motion.div
                aria-hidden
                style={{
                    ...base,
                    right: 12,
                    bottom: 12,
                    background: "radial-gradient(closest-side, rgba(236,72,153,.45), transparent 65%)",
                    width: "140px",
                    height: "140px",
                }}
                animate={{ opacity: [0.4, 0.85, 0.4], scale: [1.02, 1.08, 1.02] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
        </>
    );
}

export default function HeroCinematic() {
    // sparkles με σταθερές θέσεις
    const sparkles = useMemo(
        () =>
            Array.from({ length: 24 }).map(() => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: 2 + Math.floor(Math.random() * 3), // 2–4px
                dur: 3 + Math.random() * 4.5,
                del: Math.random() * 2.5,
            })),
        []
    );

    // parallax tilt (χωρίς fade)
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-1, 1], [7, -7]), { stiffness: 140, damping: 20 });
    const ry = useSpring(useTransform(mx, [-1, 1], [-10, 10]), { stiffness: 140, damping: 20 });

    return (
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
            {/* ΣΚΟΥΡΟ background όπως πριν */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT: copy */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-5">
                            <span className="text-primary text-sm font-medium">Indie project from Greece · since 2022</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.05]">
                            Level Up Your
                            <span className="block text-gradient glow-text">Gaming Experience</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                            Small-batch crates curated by Despina Karakosta. Two tiers, useful goodies and occasional digital bonuses — made with care.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild variant="neon" size="xl" className="group">
                                <Link to="/subscribe">
                                    Start Your Adventure
                                    <span className="inline-block group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="xl" className="group backdrop-blur">
                                <Link to="/how-it-works">
                                    <Play className="w-4 h-4" />
                                    See How It Works
                                </Link>
                            </Button>
                        </div>

                        <ul className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-neon-green" /> Secure checkout
                            </li>
                            <li className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-primary" /> Curated quality
                            </li>
                            <li className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-secondary" /> Community-driven
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT: μία εικόνα με πιο έντονα νεον εφέ αλλά ΣΚΟΥΡΟ φόντο */}
                    <div className="order-1 lg:order-2">
                        <div
                            className="relative w-full h-[440px] sm:h-[560px] lg:h-[720px]"
                            onMouseMove={(e) => {
                                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                                mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
                                my.set(((e.clientY - r.top) / r.height) * 2 - 1);
                            }}
                            onMouseLeave={() => { mx.set(0); my.set(0); }}
                        >
                            {/* Blurred clone ΜΟΝΟ για feather φωτεινότητας πάνω στην εικόνα (πολύ χαμηλό) */}
                            <img
                                src={heroLanding}
                                alt=""
                                aria-hidden
                                className="absolute inset-0 w-full h-full object-contain blur-[14px] scale-[1.04] opacity-18 mix-blend-screen z-[1]"
                            />

                            {/* Η κυρίως εικόνα — σταθερή */}
                            <motion.img
                                src={heroLanding}
                                alt="Gamecrate hero artwork"
                                className="relative z-[10] max-h-full max-w-full object-contain mx-auto select-none"
                                style={{ rotateX: rx, rotateY: ry, willChange: "transform" }}
                                initial={false}
                                animate={{}} // no fades
                                draggable={false}
                            />

                            {/* Σκοτεινό feather στις άκρες (μαλακώνει μόνο το κόψιμο) */}
                            <EdgeFeather />

                            {/* Neon flares στις γωνίες (τοπικά) */}
                            <NeonCorners />

                            {/* Glint sweep (λεπτό) */}
                            <motion.div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 z-[30]"
                                style={{
                                    background:
                                        "linear-gradient(130deg, transparent 47%, rgba(255,255,255,.12) 50%, transparent 53%)",
                                    mixBlendMode: "screen",
                                }}
                                initial={{ x: "-35%" }}
                                animate={{ x: "135%" }}
                                transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
                            />

                            {/* Sparkles */}
                            <div aria-hidden className="absolute inset-0 pointer-events-none z-[40]">
                                {sparkles.map((s, i) => (
                                    <motion.span
                                        key={i}
                                        className="absolute rounded-full shadow-[0_0_14px_rgba(255,255,255,.55)]"
                                        style={{
                                            left: s.left,
                                            top: s.top,
                                            width: s.size,
                                            height: s.size,
                                            background:
                                                "radial-gradient(circle, rgba(255,255,255,1) 0 45%, rgba(255,255,255,.65) 55%, transparent 70%)",
                                        }}
                                        animate={{ opacity: [0, 1, 0], scale: [0.7, 1.05, 0.7], y: [0, -10, 0] }}
                                        transition={{ duration: s.dur, delay: s.del, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
