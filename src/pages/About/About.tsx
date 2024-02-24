"use client";

import Link from "next/link";
import { Page } from "@/components/Page/Page";
import { Text } from "@/components/Text/Text";
import { Tag } from "@/components/Tag/Tag";
import { Button } from "@/components/Button/Button";
import { useDictionary } from "@/utils/hooks/useDictionary";
import photo from "@/../public/images/me.jpg";
import Image from "next/image";
import { Trans } from "react-i18next";
import { Emphasize } from "@/components/Emphasize/Emphasize";

export const About = () => {
  const {t} = useDictionary();

  return (
    <Page id="about" fullHeight>
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
        <div className="flex items-start justify-center">
          <Image
            src={photo}
            alt="Marcin Krueger photo"
            width="512"
            height="512"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Text variant="h2" className="text-primary">
            {t("about.hello")}
          </Text>
          <div className="flex flex-col gap-2">
            {(
              t("about.paragraphs", {
                returnObjects: true,
              }) as string[]
            )?.map((paragraph: string, index: number) => (
              <Text key={index}>
                <Trans components={{ em: <Emphasize /> }}>{paragraph}</Trans>
              </Text>
            ))}

            <div className="flex flex-row flex-wrap gap-2">
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
          <Link href="#contact">
            <Button className="w-full font-semibold dark:text-accent">
              {t("about.contact-me")}
            </Button>
          </Link>
        </div>
      </main>
    </Page>
  );
};
