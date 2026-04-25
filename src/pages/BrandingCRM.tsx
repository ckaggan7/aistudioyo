import { motion } from "framer-motion";
import { Briefcase, Plus, Palette, Type, Image as ImageIcon, FileText, Users, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Squiggle, Star as DoodleStar } from "@/components/Doodles";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4 } }),
};

const brands = [
  {
    name: "Nimbus Coffee",
    industry: "F&B · Cafe",
    colors: ["#D97706", "#92400E", "#FEF3C7"],
    logo: "☕",
    posts: 24,
    status: "Active",
  },
  {
    name: "Lumen Studio",
    industry: "Design · Agency",
    colors: ["#8B5CF6", "#EC4899", "#FFFFFF"],
    logo: "✨",
    posts: 56,
    status: "Active",
  },
  {
    name: "Verde Wellness",
    industry: "Health · Lifestyle",
    colors: ["#10B981", "#065F46", "#ECFDF5"],
    logo: "🌿",
    posts: 12,
    status: "Draft",
  },
];

const brandAssets = [
  { icon: Palette, label: "Color Palettes", count: 8 },
  { icon: Type, label: "Typography", count: 4 },
  { icon: ImageIcon, label: "Logo Files", count: 12 },
  { icon: FileText, label: "Brand Guidelines", count: 3 },
];

export default function BrandingCRM() {
  return (
    <div className="relative">
      <div className="absolute -top-2 right-20 hidden md:block opacity-60">
        <DoodleStar className="w-10 h-10 text-primary" delay={0.2} />
      </div>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-purple-glow">
            <Briefcase className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Branding CRM</h1>
            <p className="text-sm text-muted-foreground">Manage every brand, asset, and client in one place</p>
          </div>
        </div>
        <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90 rounded-xl">
          <Plus className="w-4 h-4 mr-2" /> New Brand
        </Button>
      </motion.div>

      {/* Asset summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {brandAssets.map((asset, i) => (
          <motion.div
            key={asset.label}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={i + 1}
            className="bg-card rounded-2xl p-5 shadow-card border border-border/40 hover:shadow-elevated transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-soft flex items-center justify-center mb-3">
              <asset.icon className="w-4 h-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">{asset.count}</p>
            <p className="text-sm text-muted-foreground">{asset.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Brand cards */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Brand Portfolio</h2>
        <span className="text-xs text-muted-foreground">{brands.length} active brands</span>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 mb-8">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={i + 5}
            className="bg-card rounded-2xl p-5 shadow-card border border-border/40 hover:shadow-elevated transition-shadow group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-soft flex items-center justify-center text-3xl">
                {brand.logo}
              </div>
              <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <h3 className="font-semibold text-base mb-1">{brand.name}</h3>
            <p className="text-xs text-muted-foreground mb-4">{brand.industry}</p>

            <div className="flex items-center gap-1.5 mb-4">
              {brand.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="w-6 h-6 rounded-full ring-2 ring-background shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/40">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <FileText className="w-3.5 h-3.5" /> {brand.posts} posts
              </div>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  brand.status === "Active"
                    ? "bg-success/10 text-success"
                    : "bg-warning/10 text-warning"
                }`}
              >
                {brand.status}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Empty add card */}
        <motion.button
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={brands.length + 5}
          className="rounded-2xl border-2 border-dashed border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all p-5 flex flex-col items-center justify-center text-center min-h-[260px] group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-3 transition-colors">
            <Plus className="w-5 h-5 text-primary" />
          </div>
          <p className="font-semibold text-sm">Add New Brand</p>
          <p className="text-xs text-muted-foreground mt-1">Set up identity & guidelines</p>
        </motion.button>
      </div>

      {/* Clients section */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={9} className="bg-card rounded-2xl p-6 shadow-card border border-border/40 relative overflow-hidden">
        <div className="absolute -bottom-2 -right-2 opacity-30">
          <Squiggle className="w-32 h-16 text-accent" />
        </div>
        <div className="flex items-center justify-between mb-5 relative">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Recent Clients</h3>
          </div>
          <Button variant="ghost" size="sm">View all</Button>
        </div>
        <div className="space-y-3 relative">
          {[
            { name: "Aarav Mehta", brand: "Nimbus Coffee", date: "2 days ago" },
            { name: "Priya Reddy", brand: "Lumen Studio", date: "5 days ago" },
            { name: "Karan Shah", brand: "Verde Wellness", date: "1 week ago" },
          ].map((client) => (
            <div key={client.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/40 transition-colors">
              <div className="w-9 h-9 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground text-xs font-semibold">
                {client.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{client.name}</p>
                <p className="text-xs text-muted-foreground truncate">{client.brand} · {client.date}</p>
              </div>
              <Button variant="ghost" size="sm">Open</Button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
