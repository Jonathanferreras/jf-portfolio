"use client";

import { useState } from "react";
import Image from "next/image";
import { getSortedWorkExperience } from "@/services/work-experience/work-experience-service";
import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

function formatYear(dateStr: string) {
  if (!dateStr) return "Present";
  return new Date(dateStr).getFullYear().toString();
}

export default function Career() {
  const workExperience = getSortedWorkExperience({ asc: true });
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (shortName: string) => {
    setExpanded((prev) => ({
      ...prev,
      [shortName]: !prev[shortName],
    }));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-5xl sm:text-7xl font-black text-center mb-5 text-[color:var(--foreground)]">
        Career Timeline
      </h1>
      <p className="text-lg sm:text-xl text-center text-gray-400 max-w-xl mx-auto mb-20">
        A journey through the roles, industries, and projects that shaped my
        engineering path.
      </p>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-white/20 transform -translate-x-1/2 z-0" />
        <div className="space-y-20">
          {workExperience.map((job, idx) => {
            const year = formatYear(job.startDate);
            const isLeft = idx % 2 === 0;
            const isExpanded = expanded[job.shortName];

            return (
              <div
                key={`${job.companyName}-${idx}`}
                id={job.shortName}
                className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row-reverse" : ""} items-center`}
              >
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 flex-col items-center">
                  <div className="w-4 h-4 bg-[color:var(--accent)] rounded-full border-4 border-[var(--background)]" />
                  <span className="text-xs mt-2 text-gray-400">{year}</span>
                </div>

                <div
                  className={`w-full md:w-1/2 px-4 z-10 ${
                    isLeft
                      ? "md:pr-16 md:justify-end"
                      : "md:pl-16 md:justify-start"
                  } flex`}
                >
                  <div className="bg-transparent border border-white/40 p-6 rounded-lg shadow-md w-full md:w-[90%] transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      {job.logo && (
                        <Image
                          src={job.logo}
                          alt={`${job.companyName} logo`}
                          width={40}
                          height={40}
                          className="object-contain rounded-md"
                        />
                      )}
                      <div>
                        <h2 className="text-white font-semibold text-lg">
                          {job.position}
                        </h2>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">
                          {job.companyName}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-1">
                      <strong className="text-white">Duration:</strong>{" "}
                      {job.startDate} – {job.endDate || "Present"}
                    </p>
                    <p className="text-sm text-gray-400 mb-3">
                      <strong className="text-white">Industry:</strong>{" "}
                      {job.industry}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line mb-4">
                      {job.description}
                    </p>
                    {job.achievements?.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-white space-y-1 mb-6">
                        <p className="text-sm text-gray-400 mb-3">
                          <strong className="text-white">
                            Achievements:
                          </strong>{" "}
                        </p>
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.projects?.length > 0 && (
                      <button
                        onClick={() => toggleExpand(job.shortName)}
                        className="text-sm text-[color:var(--accent)] hover:underline focus:outline-none mb-10 flex items-center gap-1"
                      >
                        {isExpanded ? "Hide Projects" : "View Projects"}
                        <span className="transition-transform duration-200">
                          {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </span>
                      </button>
                    )}
                    {isExpanded && (
                      <ul className="mt-2 mb-10 space-y-2 border-t border-white/10 pt-4">
                        {job.projects.map((project, i) => (
                          <li key={i}>
                            <p className="text-white font-medium text-sm">
                              {project.name}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {project.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center w-fit border border-[color:var(--foreground)] text-[color:var(--foreground)] hover:bg-[color:var(--accent)] hover:text-black hover:border-[color:var(--background)] transition-colors px-4 py-2 rounded-full text-sm font-medium mb-4"
                      >
                        Visit Company's Website{" "}
                        <ArrowUpRightIcon className="w-4 h-4 ml-2 text-[color:var(--foreground)] group-hover:text-black transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
