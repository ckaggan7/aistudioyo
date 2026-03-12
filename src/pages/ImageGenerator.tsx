import { useState } from "react";
import { motion } from "framer-motion";
import { Image, Download, BookmarkPlus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const placeholderImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=512&h=512&fit=crop",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=512&h=512&fit=crop",
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=512&h=512&fit=crop",
];

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2500));
    setGeneratedImage(placeholderImages[Math.floor(Math.random() * placeholderImages.length)]);
    setLoading(false);
    toast.success("Image generated!");
  };

  return (
    <div className="max-w-4xl">
      <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-2xl font-bold tracking-tight mb-6">
        AI Image Generator
      </motion.h1>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-card rounded-2xl p-6 shadow-card mb-6">
        <label className="text-sm font-medium mb-1.5 block">Describe your image</label>
        <Textarea
          placeholder="e.g. A vibrant sunset over ocean waves with golden light reflections, cinematic style"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={3}
        />
        <Button onClick={handleGenerate} disabled={loading} className="mt-4 bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity">
          {loading ? (
            <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Generating...</span>
          ) : (
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Generate Image</span>
          )}
        </Button>
      </motion.div>

      {generatedImage && (
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-card rounded-2xl p-6 shadow-card">
          <img src={generatedImage} alt="Generated" className="w-full max-w-md mx-auto rounded-xl mb-4" />
          <div className="flex items-center justify-center gap-3">
            <Button variant="outline" size="sm" onClick={() => toast.success("Downloading...")}>
              <Download className="w-4 h-4 mr-2" /> Download
            </Button>
            <Button variant="outline" size="sm" onClick={() => toast.success("Saved to Media Library")}>
              <BookmarkPlus className="w-4 h-4 mr-2" /> Save to Library
            </Button>
            <Button size="sm" className="bg-gradient-hero text-primary-foreground hover:opacity-90">
              <Image className="w-4 h-4 mr-2" /> Use in Post
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
