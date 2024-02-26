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
} from "@/utils/constants";
import { useRef, MouseEvent } from "react";


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

  const refName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refTopic = useRef<HTMLInputElement>(null);
  const refContent = useRef<HTMLTextAreaElement>(null);

  const submitForm = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const data = {
      name: refName?.current?.value ?? "",
      email: refEmail?.current?.value ?? "",
      topic: refTopic?.current?.value ?? "",
      content: refContent?.current?.value ?? ""
    }
    console.log(data)

    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        ...data
      })
    }).then(res => console.log(res)).catch(err => console.error(err))
  }

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
            <Input label={t("contact.form.name")} ref={refName} />
            <Input label={t("contact.form.email")} type="email" ref={refEmail} />
            <Input
              label={t("contact.form.subject")}
              className="col-start-1 md:col-end-3"
              ref={refTopic}
            />
            <Input
              label={t("contact.form.message")}
              type="longText"
              className="col-start-1 md:col-end-3"
              ref={refContent}
            />
          </div>
          <Button className="mt-4 font-semibold dark:text-accent" onClick={(e) => submitForm(e)}>
            {t("contact.form.submit")}
          </Button>
        </form>
      </div>
    </Page>
  );
};
