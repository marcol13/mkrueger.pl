import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n/client";

export const useDictionary = (dictionary: string = "common", options?: any) => {
  const locale = useParams()?.lang as LocaleTypes;
  const { t } = useTranslation(locale, dictionary);

  return {t, locale};
};
