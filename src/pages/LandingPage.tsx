import { motion, type Transition } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Palette, Calendar, ArrowRight, Zap, TrendingUp, Image, Check, MessageSquareText, Wand2, BarChart3, Send, PenLine, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

const features = [
  {
    icon: Sparkles,
    title: "AI Content Generator",
    description: "Generate captions, hashtags, and hooks powered by AI for any platform.",
  },
  {
    icon: Palette,
    title: "Design Studio",
    description: "Create stunning visuals with templates, AI backgrounds, and drag-and-drop editing.",
  },
  {
    icon: Calendar,
    title: "Content Scheduler",
    description: "Plan and schedule your posts across platforms with a visual calendar.",
  },
  {
    icon: Image,
    title: "AI Image Generator",
    description: "Generate unique images from text prompts for your social media posts.",
  },
  {
    icon: TrendingUp,
    title: "Trend Engine",
    description: "Stay ahead with trending hashtags, topics, and content ideas.",
  },
  {
    icon: Zap,
    title: "Analytics Dashboard",
    description: "Track engagement, growth, and performance across all your channels.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            AI <span className="text-gradient-hero">STUDIYO</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <Link to="/login">
              <Button variant="outline" size="sm" className="rounded-full px-5">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero — Lovable-style full-screen gradient with centered content */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(40,95%,85%)] via-[hsl(330,80%,75%)] to-[hsl(260,85%,70%)] opacity-60" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[hsl(20,90%,80%/0.5)] blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[hsl(280,80%,70%/0.4)] blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(350,85%,75%/0.4)] blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 text-foreground">
            Create content
            <br />
            with AI
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto mb-12"
          >
            Generate captions, design visuals, and schedule posts — all in one studio.
          </motion.p>

          {/* Prompt-style CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full max-w-xl mx-auto"
          >
            <Link to="/signup">
              <div className="bg-card/90 backdrop-blur-xl rounded-2xl shadow-elevated border border-border/50 p-5 text-left hover:shadow-glow transition-shadow duration-500 cursor-pointer group">
                <p className="text-muted-foreground text-sm md:text-base mb-8">
                  Describe the content you want to create...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI-powered
                  </div>
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-background" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Three steps to viral content
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-border" />

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {[
                {
                  step: "01",
                  title: "Describe your idea",
                  description: "Type a prompt — your topic, tone, platform, and vibe. Our AI understands context like a creative partner.",
                  icon: Sparkles,
                },
                {
                  step: "02",
                  title: "Generate & refine",
                  description: "Get captions, images, and designs in seconds. Edit, remix, or regenerate until it's perfect.",
                  icon: Zap,
                },
                {
                  step: "03",
                  title: "Schedule & grow",
                  description: "Plan your calendar, publish across platforms, and watch your engagement soar with analytics.",
                  icon: TrendingUp,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="relative text-center group"
                >
                  {/* Step number circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border/80 shadow-card flex items-center justify-center mx-auto group-hover:shadow-glow group-hover:border-primary/30 transition-all duration-500">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA under steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="text-center mt-16"
          >
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity px-8 h-12 text-base rounded-full">
                Try it free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything you need to create
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              One platform for generating, designing, scheduling, and analyzing your social media content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple credit-based pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              1 credit = 1 AI generation. Start free, upgrade when you need more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                credits: "5 credits / day",
                features: ["AI text generation", "AI image generation", "Basic templates", "Community support"],
                cta: "Join the Waitlist",
                highlight: false,
              },
              {
                name: "Pro",
                price: "$9",
                period: "/ month",
                credits: "100 credits / day",
                features: ["Everything in Free", "Priority generation", "Advanced templates", "Content calendar", "Email support"],
                cta: "Join the Waitlist",
                highlight: true,
              },
              {
                name: "Business",
                price: "$29",
                period: "/ month",
                credits: "Unlimited credits",
                features: ["Everything in Pro", "Team collaboration", "Custom branding", "Analytics dashboard", "API access", "Dedicated support"],
                cta: "Join the Waitlist",
                highlight: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={cn(
                  "rounded-2xl p-6 flex flex-col",
                  plan.highlight
                    ? "bg-gradient-hero text-primary-foreground shadow-elevated ring-2 ring-primary/30 scale-[1.03]"
                    : "bg-card shadow-card border border-border/50"
                )}
              >
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={cn("text-sm", plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground")}>{plan.period}</span>
                </div>
                <p className={cn("text-sm font-medium mb-6", plan.highlight ? "text-primary-foreground/80" : "text-primary")}>{plan.credits}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={cn("w-4 h-4 mt-0.5 shrink-0", plan.highlight ? "text-primary-foreground" : "text-primary")} />
                      <span className={plan.highlight ? "text-primary-foreground/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/signup" className="mt-auto">
                  <Button
                    size="lg"
                    className={cn(
                      "w-full h-12 text-base",
                      plan.highlight
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to level up your content?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of creators using AI STUDIYO to grow their audience.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity px-8 h-12 text-base">
              Join the Waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">© 2026 AI STUDIYO. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
