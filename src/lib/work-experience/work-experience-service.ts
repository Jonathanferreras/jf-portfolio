import ShorelightExperience from "./data/shorelight.json";
import DRLExperience from "./data/drl.json";
import ComplySciExperience from "./data/complysci.json";
import TrilogyExperience from "./data/trilogy.json";
import SouthwestExperience from "./data/southwest.json";
import MTAExperience from "./data/mta.json";
import { Job } from "./types/job";

export const workExperience: Job[] = [
  ShorelightExperience,
  DRLExperience,
  ComplySciExperience,
  TrilogyExperience,
  SouthwestExperience,
  MTAExperience,
];

export const getSortedWorkExperience = ({ asc } = { asc: true }) =>
  workExperience.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();

    return asc ? dateB - dateA : dateA - dateB;
  });

export const getWorkExperienceByName = (name: string) =>
  workExperience.find((job) => job.shortName === name);

export const getCareerHighlights = () => {
  const mta = getWorkExperienceByName("mta");
  const drl = getWorkExperienceByName("drl");

  return [drl, mta];
};

export const getYearsWorked = () => {
  const firstJob = getWorkExperienceByName("mta");
  return firstJob ? calculateYearsSinceDate(firstJob.startDate) : 0;
};

export const getHoursWorked = () => calculateHoursByJob(workExperience);

export const getNumOfProjectsWorkedOn = () => {
  return workExperience.flatMap((job) => job.projects || []).length;
};

export const getAllIndustriesWorked = () => {
  return new Set(workExperience.map((job) => job.industry)).size;
};

// Helper Functions

const calculateYearsSinceDate = (date: string) => {
  const startDate = new Date(date);
  const currentDate = new Date();
  const diffInMs = currentDate.getTime() - startDate.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // accurate average year

  return Math.round(diffInYears * 2) / 2;
};

const calculateHoursByJob = (jobs: Job[]) => {
  const fullTimeHoursPerWeek = 40;
  const partTimeHoursPerWeek = 20;
  let totalHours = 0;

  jobs.forEach((job) => {
    const { startDate, endDate, isFullTime } = job;
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const weeksWorked = Math.floor(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 7)
    );
    const weeklyHours = isFullTime
      ? fullTimeHoursPerWeek
      : partTimeHoursPerWeek;

    totalHours += weeksWorked * weeklyHours;
  });

  return totalHours;
};
