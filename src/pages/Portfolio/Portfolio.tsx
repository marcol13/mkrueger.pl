"use client";

import { Page } from "@/components/Page/Page";
import { ProjectItem } from "@/components/ProjectItem/ProjectItem";
import { useTranslation } from "@/app/i18n/client";
import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/i18n/settings";
import projects from "@/../public/projects.json";

export const Portfolio = () => {
	const locale = useParams()?.locale as LocaleTypes;
	const { t } = useTranslation(locale, "common");

	return (
		<Page id="projects" title={t("sections.projects")}>
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
