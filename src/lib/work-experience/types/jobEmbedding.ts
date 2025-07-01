import { Job } from "./job";

export type JobEmbedding = {
  company_name: Job["companyName"];
  job_title: Job["position"];
  start_date: Date;
  end_date: Date;
  is_full_time: Job["isFullTime"];
  industry: Job["industry"];
  technologies: Job["technologies"];
  projects: { name: string; description: string }[];
  achievements: Job["achievements"];
  summary_text: string;
  embedding: string;
};
