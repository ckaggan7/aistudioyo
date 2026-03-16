import { motion, type Transition } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Palette, Calendar, ArrowRight, Zap, TrendingUp, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

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
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-gradient-hero">Vibe</span>Studio
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <Link to="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50">
              <img
                src={heroImage}
                alt="VibeStudio AI dashboard preview showing social media content management"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Content Creation
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Create Social Media
              <br />
              <span className="text-gradient-hero">Content with AI</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            >
              Generate captions, design visuals, and schedule posts — all in one studio. Built for creators and agencies who move fast.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity px-8 h-12 text-base">
                  Join the Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" className="h-12 text-base px-8 border-2 border-primary text-primary bg-primary/5 hover:bg-primary/10 transition-colors font-semibold">
                  View Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
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
            Join thousands of creators using VibeStudio AI to grow their audience.
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
          <span className="text-sm text-muted-foreground">© 2026 VibeStudio AI. All rights reserved.</span>
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
