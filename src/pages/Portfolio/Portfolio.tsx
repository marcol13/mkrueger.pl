"use client"

import { Page } from "@/components/Page/Page";
import { ProjectItem } from "@/components/ProjectItem/ProjectItem";
import projects from "@/../public/projects.json";

export const Portfolio = () => {
  return (
    <Page id="projects">
      <div className="flex flex-col gap-6">
        {projects
          .filter((p) => p.isHighlighted === true)
          .map((el) => (
            <ProjectItem
              img={el.image}
              title={el.name}
              shortDesc={el.shortDescription}
              techStack={el.techStack}
              key={el.name}
            />
          ))}
      </div>
    </Page>
  );
};
