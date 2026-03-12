import { motion } from "framer-motion";
import { FileText, Calendar, TrendingUp, Hash } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const stats = [
  { icon: FileText, label: "Posts Created", value: "128", change: "+12%" },
  { icon: Calendar, label: "Scheduled Posts", value: "24", change: "+8%" },
  { icon: TrendingUp, label: "Engagement Rate", value: "4.8%", change: "+0.3%" },
  { icon: Hash, label: "Trending Hashtags", value: "56", change: "+15%" },
];

export default function DashboardHome() {
  return (
    <div>
      <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-2xl font-bold tracking-tight mb-6">
        Dashboard
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={i + 1}
            className="bg-card rounded-2xl p-5 shadow-card"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-success">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl p-6 shadow-card">
          <h3 className="font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-3">
            {["Summer vibes collection launch 🌊", "Behind the scenes at our studio 🎬", "New product announcement 🚀"].map((post, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  IG
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{post}</p>
                  <p className="text-xs text-muted-foreground">Instagram · 2h ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-card">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Generate Caption", icon: "✍️" },
              { label: "Create Image", icon: "🎨" },
              { label: "Schedule Post", icon: "📅" },
              { label: "View Analytics", icon: "📊" },
            ].map((action) => (
              <button
                key={action.label}
                className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors text-left"
              >
                <span className="text-2xl mb-2 block">{action.icon}</span>
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
