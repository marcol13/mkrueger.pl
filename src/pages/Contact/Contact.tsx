"use client";

import Link from "next/link";
import { Page } from "@/components/Page/Page";
import { Text } from "@/components/Text/Text";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useDictionary } from "@/utils/hooks/useDictionary";
import { Trans } from "react-i18next";
import { Emphasize } from "@/components/Emphasize/Emphasize";
import {
  EMAIL,
  LINKEDIN,
  LINKEDIN_EN,
  GITHUB,
  TWITTER,
  HASHNODE,
} from "@/utils/constants";

const ContactLink = ({
  children,
  href,
}: {
  children?: string;
  href: string;
}) => {
  return (
    <Emphasize>
      <Link href={href} target="_blank">{children}</Link>
    </Emphasize>
  );
};

export const Contact = () => {
  const { t, locale } = useDictionary();

  return (
    <Page id="contact" title={t("sections.contact")}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-contact">
        <div className="p-4">
          <Text variant="h3">{t("contact.message-header")}</Text>
          {(
            t("contact.message-subheaders", { returnObjects: true }) as string[]
          )?.map((subheader: string, index: number) => (
            <Text key={index}>
              <Trans
                components={{
                  mail: <ContactLink href={`mailto:${EMAIL}`} />,
                  linkedin: (
                    <ContactLink
                      href={locale === "pl" ? LINKEDIN : LINKEDIN_EN}
                    />
                  ),
                  github: <ContactLink href={GITHUB} />,
                }}
              >
                {subheader}
              </Trans>
            </Text>
          ))}
        </div>
        <form className="p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input label={t("contact.form.name")} />
            <Input label={t("contact.form.email")} type="email" />
            <Input
              label={t("contact.form.subject")}
              className="col-start-1 md:col-end-3"
            />
            <Input
              label={t("contact.form.message")}
              type="longText"
              className="col-start-1 md:col-end-3"
            />
          </div>
          <Button className="mt-4 font-semibold dark:text-accent">
            {t("contact.form.submit")}
          </Button>
        </form>
      </div>
    </Page>
  );
};
