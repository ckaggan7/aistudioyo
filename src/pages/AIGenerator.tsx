import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Copy, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AIGenerator() {
  const [platform, setPlatform] = useState("instagram");
  const [contentType, setContentType] = useState("post");
  const [brand, setBrand] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState("casual");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    hook: string;
    caption: string;
    description: string;
    hashtags: string;
  } | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error("Please enter a topic");
      return;
    }
    setLoading(true);
    // Simulate AI generation
    await new Promise((r) => setTimeout(r, 2000));
    setResult({
      hook: `🔥 Stop scrolling — this ${topic} tip will change everything`,
      caption: `Here's what nobody tells you about ${topic}. We've been working on something special at ${brand || "our studio"}, and today we're finally sharing it with you. This is for every ${audience || "creator"} who wants to level up. 💪`,
      description: `A comprehensive ${contentType} about ${topic} targeting ${audience || "your audience"} with a ${tone} tone. Perfect for ${platform}.`,
      hashtags: `#${topic.replace(/\s+/g, "")} #ContentCreator #SocialMediaMarketing #AI #VibeStudio #${platform} #Trending`,
    });
    setLoading(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="max-w-5xl">
      <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-2xl font-bold tracking-tight mb-6">
        AI Content Generator
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-card rounded-2xl p-6 shadow-card space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Platform</label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Content Type</label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="post">Post</SelectItem>
                  <SelectItem value="carousel">Carousel</SelectItem>
                  <SelectItem value="reel">Reel</SelectItem>
                  <SelectItem value="ad">Ad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Brand Name</label>
            <Input placeholder="Your brand name" value={brand} onChange={(e) => setBrand(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Target Audience</label>
            <Input placeholder="e.g. Gen Z fashion enthusiasts" value={audience} onChange={(e) => setAudience(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Tone</label>
            <Select value={tone} onValueChange={setTone}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="funny">Funny</SelectItem>
                <SelectItem value="inspirational">Inspirational</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block">Topic</label>
            <Textarea placeholder="What's your post about?" value={topic} onChange={(e) => setTopic(e.target.value)} rows={3} />
          </div>
          <Button onClick={handleGenerate} disabled={loading} className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity h-11">
            {loading ? (
              <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Generating...</span>
            ) : (
              <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Generate Content</span>
            )}
          </Button>
        </motion.div>

        {/* Output */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-card rounded-2xl p-6 shadow-card">
          {result ? (
            <div className="space-y-5">
              {[
                { label: "Hook", value: result.hook },
                { label: "Caption", value: result.caption },
                { label: "Description", value: result.description },
                { label: "Hashtags", value: result.hashtags },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium">{item.label}</span>
                    <div className="flex gap-1">
                      <button onClick={() => copyToClipboard(item.value)} className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                        <BookmarkPlus className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground bg-secondary/50 rounded-xl p-3 leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center py-16">
              <div>
                <Sparkles className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">Fill in the form and click Generate to create AI content</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
