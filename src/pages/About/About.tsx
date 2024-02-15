"use client";

import { Page } from "@/components/Page/Page";
import { Text } from "@/components/Text/Text";
import { Tag } from "@/components/Tag/Tag";
import { Button } from "@/components/Button/Button";
import { useDictionary } from "@/utils/hooks/useDictionary";
import photo from "@/../public/images/me.jpg";
import Image from "next/image";

export const About = () => {
	const t = useDictionary();

	return (
		<Page id="about" fullHeight>
			<main className="grid grid-cols-2">
				<Image
					src={photo}
					alt="Marcin Krueger photo"
					width="512"
					height="512"
					className="rounded-full"
				/>
				<div className="flex flex-col gap-6">
					<Text variant="h2" className="text-secondary dark:text-primary">{t("about.hello")}</Text>
					<div className="flex flex-col gap-2">
						{(t("about.paragraphs", { returnObjects: true }) as string[])?.map(
							(paragraph: string, index: number) => (
								<Text key={index}>{paragraph}</Text>
							)
						)}

						<div className="flex flex-row gap-2 flex-wrap">
							<Tag>HTML</Tag>
							<Tag>CSS/SCSS</Tag>
							<Tag>JavaScript</Tag>
							<Tag>TypeScript</Tag>
							<Tag>React</Tag>
							<Tag>Angular</Tag>
							<Tag>Python</Tag>
							<Tag>PyTorch</Tag>
							<Tag>CI/CD</Tag>
							<Tag>Docker</Tag>
							<Tag>Git</Tag>
						</div>
					</div>
					<Button className="font-semibold dark:text-accent">Pobierz CV</Button>
				</div>
			</main>
		</Page>
	);
};
