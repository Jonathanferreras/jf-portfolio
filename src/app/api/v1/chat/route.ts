import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { JobEmbedding } from "@/lib/work-experience/types/jobEmbedding";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    });

    if (!embeddingRes.data || embeddingRes.data.length === 0) {
      throw new Error("Failed to create embedding");
    }

    const questionEmbedding = embeddingRes.data[0].embedding;

    const { data: cachedMatches } = await supabase.rpc(
      "match_cached_question",
      {
        query_embedding: questionEmbedding,
        match_threshold: 0.9,
        match_count: 1,
      }
    );

    if (cachedMatches?.length > 0) {
      console.log("🚀 ~ POST ~ cachedMatches:", cachedMatches);
      console.log("Using cached match for question:", message);
      const cachedMatch = cachedMatches[0];
      return new Response(JSON.stringify({ reply: cachedMatch.reply }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // If no cached match, proceed to find matches in the job embeddings
      const { data: matches, error } = await supabase.rpc("match_jobs", {
        query_embedding: questionEmbedding,
        match_count: 3,
      });

      if (error) {
        throw new Error("Failed to match jobs: " + error.message);
      }

      const context = matches
        .map((m: JobEmbedding) => m.summary_text)
        .join("\n\n");

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `
You are Jonathan Ferreras, the owner of this portfolio website. 
You are answering a question from a visitor who wants to learn about your past work experience.
Speak in first person (use "I", "my", etc.) and base your answer only on the work history provided.
Do not make up any information that isn't in the work history.
`,
          },
          {
            role: "user",
            content: `Here is my work history:\n\n${context}\n\nQuestion: ${message}`,
          },
        ],
        temperature: 0.7,
      });

      if (!completion.choices || completion.choices.length === 0) {
        throw new Error("No response generated from OpenAI");
      }

      const reply =
        completion.choices[0]?.message?.content ?? "No response generated.";

      if (reply !== "No response generated." && reply !== "") {
        await supabase.from("chat_cache").insert({
          question: message,
          embedding: questionEmbedding,
          reply: reply,
        });
      }

      return new Response(JSON.stringify({ reply }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to create embedding" }),
      { status: 500 }
    );
  }
}
