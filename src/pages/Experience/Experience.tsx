import { Page } from "@/components/Page/Page"
import { ExperienceItem } from "@/components/ExperienceItem/ExperienceItem"
import { useTranslation } from "@/app/i18n/client";
import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/i18n/settings";

export const Experience = () => {

    const locale = useParams()?.locale as LocaleTypes;
	const { t } = useTranslation(locale, "common");

    return (
        <Page id="experience" title={t("sections.experience")}>
            <div>
                
            </div>
        </Page>
    )
}