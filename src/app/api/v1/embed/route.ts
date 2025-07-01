import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import { workExperience } from "@/lib/work-experience/work-experience-service";
import { Job } from "@/lib/work-experience/types/job";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
);

export async function POST(req: Request) {
  for (const job of workExperience) {
    const inputText = formatWorkExperienceForEmbedding(job);
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: inputText,
    });

    if (!embeddingRes.data || embeddingRes.data.length === 0) {
      return new Response(
        JSON.stringify({ error: "Failed to create embedding" }),
        { status: 500 }
      );
    }

    const { error } = await supabase.from("job_embeddings").insert({
      company_name: job.companyName,
      job_title: job.position,
      start_date: new Date(job.startDate),
      end_date: new Date(job.endDate),
      is_full_time: job.isFullTime,
      industry: job.industry,
      technologies: job.technologies,
      projects: job.projects,
      achievements: job.achievements,
      summary_text: inputText,
      embedding: embeddingRes.data[0].embedding,
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: "Failed to save embedding" }),
        {
          status: 500,
        }
      );
    }
  }

  return new Response(
    JSON.stringify({ message: "Embeddings uploaded successfully" }),
    { status: 200 }
  );
}

function formatWorkExperienceForEmbedding(job: Job) {
  const {
    companyName,
    position,
    description,
    startDate,
    endDate,
    isFullTime,
    technologies,
    projects,
    achievements,
  } = job;

  const dates = `From ${startDate} to ${endDate}`;
  const role = `I worked ${isFullTime ? "full-time" : "part-time"} at ${companyName} as a ${position}.`;
  const techStack = `Technologies used: ${[
    ...technologies.frontend,
    ...technologies.backend,
    ...technologies.tools,
  ].join(", ")}.`;

  const projectDetails = projects
    .map((p) => `${p.name}: ${p.description}`)
    .join("\n");

  const achievementDetails = achievements.map((a) => `- ${a}`).join("\n");

  return `${dates}, ${role} ${description}\n\n${techStack}\n\nProjects:\n${projectDetails}\n\nAchievements:\n${achievementDetails}`;
}
