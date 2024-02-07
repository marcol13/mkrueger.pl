"use client";

import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/i18n/settings";
import { Page } from "@/components/Page/Page";
import { Text } from "@/components/Text/Text";
import { Tag } from "@/components/Tag/Tag";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";

export const About = () => {
	const locale = useParams()?.lang as LocaleTypes;
	const { t } = useTranslation(locale, "about");

	return (
		<Page id="about">
			<main className="grid grid-cols-2">
				<Image
					src="/images/me.jpg"
					alt="Marcin Krueger photo"
					width="512"
					height="512"
					className="rounded-full"
				/>
				<div className="flex flex-col gap-6">
					<Text variant="h2">{t("hello")}</Text>
					<div className="flex flex-col gap-2">
						{(t("paragraphs", { returnObjects: true }) as string[])?.map(
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
					<Button>Pobierz CV</Button>
				</div>
			</main>
		</Page>
	);
};
