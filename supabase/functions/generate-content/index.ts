import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { platform, contentType, brand, audience, tone, topic } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are a social media content expert. Generate engaging content for ${platform}. 
Return a JSON object with exactly these keys: hook, caption, description, hashtags.
- hook: A short attention-grabbing opening line with an emoji
- caption: A compelling 2-3 sentence caption
- description: A brief meta description of the content
- hashtags: 8-12 relevant hashtags as a single string starting with #
Keep the tone ${tone}. Target audience: ${audience || "general audience"}. Brand: ${brand || "the creator"}.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Create a ${contentType} about: ${topic}` },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "generate_social_content",
              description: "Generate social media content with hook, caption, description and hashtags",
              parameters: {
                type: "object",
                properties: {
                  hook: { type: "string", description: "Attention-grabbing opening line with emoji" },
                  caption: { type: "string", description: "Compelling 2-3 sentence caption" },
                  description: { type: "string", description: "Brief meta description of the content" },
                  hashtags: { type: "string", description: "8-12 relevant hashtags as a single string" },
                },
                required: ["hook", "caption", "description", "hashtags"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "generate_social_content" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please add credits." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    
    if (!toolCall) {
      throw new Error("No tool call in response");
    }

    const content = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(content), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-content error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
