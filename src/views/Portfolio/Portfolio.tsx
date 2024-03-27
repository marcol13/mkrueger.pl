"use client";

import { Page } from "@/components/Page/Page";
import { ProjectItem } from "@/components/ProjectItem/ProjectItem";
import { Button } from "@/components/Button/Button";
import { useDictionary } from "@/utils/hooks/useDictionary";
import projects from "@/../public/projects.json";

export const Portfolio = () => {
  const {t} = useDictionary();

  return (
    <Page id="projects" title={t("sections.projects")}>
      <>
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
        <div className="flex justify-center">
          <Button className="mt-6 w-full py-4 font-semibold dark:text-accent">
            {t("portfolio.seeMore")}
          </Button>
        </div>
      </>
    </Page>
  );
};
