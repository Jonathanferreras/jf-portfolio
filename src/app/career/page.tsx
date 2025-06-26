import { job } from "@/services/work-experience/types/job";
import { getSortedWorkExperience } from "@/services/work-experience/work-experience-service";

export default function Career() {
  const workExperience = getSortedWorkExperience({ asc: true });
  return (
    <div>
      <h1>My Career</h1>
      {workExperience.map((job: job) => (
        <div>
          <h2>
            {job.position} at {job.companyName}
          </h2>
          <p>
            <strong>Duration:</strong> {job.startDate} -{" "}
            {job.endDate ?? "Present"}
          </p>
          <p>
            <strong>Industry:</strong> {job.industry}
          </p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
