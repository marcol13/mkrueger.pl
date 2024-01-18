"use client"

import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/i18n/settings";
import { Page } from "@/components/Page/Page";
import { Text } from "@/components/Text/Text";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "@/app/i18n/client";

export const Contact = () => {
  const locale = useParams()?.lang as LocaleTypes;
	const { t } = useTranslation(locale, "contact");

  return (
    <Page id="contact">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Text variant="p">{t("message-header")}</Text>
          <Text variant="p">
            {t("message-subheader")}
          </Text>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <Input label={t("form.name")} />
            <Input label={t("form.email")} type="email" />
            <Input label={t("form.subject")} className="col-start-1 col-end-3" />
            <Input label={t("form.message")} type="longText" className="col-start-1 col-end-3"/>
          </div>
          <Button>{t("form.submit")}</Button>
        </form>
      </div>
    </Page>
  );
};
