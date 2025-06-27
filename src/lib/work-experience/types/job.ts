export type job = {
  companyName: string;
  shortName: string;
  description: string;
  industry: string;
  position: string;
  startDate: string;
  endDate: string;
  isFullTime: boolean;
  technologies: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  projects: { name: string; description: string }[];
  achievements: string[];
  logo: string;
  video: string;
  link: string;
};
