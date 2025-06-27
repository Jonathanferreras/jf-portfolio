export type job = {
  companyName: string;
  shortName: string;
  description: string;
  industry: string;
  position: string;
  startDate: string; // Format: MM/DD/YYYY
  endDate: string; // Empty string if ongoing
  isFullTime: boolean;
  technologies: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  projects: []; // Can be replaced with a more specific type if project structure is known
  achievements: []; // Same as above
  logo: string; // Path to image
  video: string; // URL or empty
  link: string; // URL
};
