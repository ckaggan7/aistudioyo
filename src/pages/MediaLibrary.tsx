import { useState } from "react";
import { motion } from "framer-motion";
import { Grid3X3, List, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const mockMedia = [
  { id: 1, type: "image", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop", name: "Abstract art" },
  { id: 2, type: "image", url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&h=300&fit=crop", name: "Gradient" },
  { id: 3, type: "image", url: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=300&h=300&fit=crop", name: "Purple flow" },
  { id: 4, type: "image", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", name: "Mountains" },
  { id: 5, type: "image", url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop", name: "Forest" },
  { id: 6, type: "design", url: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop", name: "Design mockup" },
];

type Filter = "all" | "image" | "video" | "design";

export default function MediaLibrary() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? mockMedia : mockMedia.filter((m) => m.type === filter);

  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Media Library</h1>
        <div className="flex gap-2">
          {(["all", "image", "video", "design"] as Filter[]).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className={filter === f ? "bg-gradient-hero text-primary-foreground hover:opacity-90" : ""}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}s
            </Button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((media, i) => (
          <motion.div
            key={media.id}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={i}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
          >
            <img src={media.url} alt={media.name} className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <button className="p-2 rounded-full bg-background/90 hover:bg-background transition-colors" onClick={() => toast.info("Preview: " + media.name)}>
                <Eye className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-background/90 hover:bg-background transition-colors" onClick={() => toast.success("Deleted")}>
                <Trash2 className="w-4 h-4 text-destructive" />
              </button>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium truncate">{media.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{media.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
