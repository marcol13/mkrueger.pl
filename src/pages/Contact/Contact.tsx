"use client";

import { Page } from "@/components/Page/Page";
import { Text } from "@/components/Text/Text";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useDictionary } from "@/utils/hooks/useDictionary";

export const Contact = () => {
  const t = useDictionary();

  return (
    <Page id="contact" title={t("sections.contact")}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-contact">
        <div className="p-4">
          <Text variant="h3">{t("contact.message-header")}</Text>
          <Text variant="p">{t("contact.message-subheader")}</Text>
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
