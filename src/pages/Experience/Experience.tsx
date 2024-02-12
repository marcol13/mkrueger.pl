import { Page } from "@/components/Page/Page"
import { ExperienceBlock } from "@/components/Experience/ExperienceBlock/ExperienceBlock"
import { useTranslation } from "@/app/i18n/client";
import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/i18n/settings";
import { ExperienceType } from "@/utils/types/ExperienceType";
import experience from "@/../public/experience.json";

export const Experience = () => {

    const locale = useParams()?.locale as LocaleTypes;
	const { t } = useTranslation(locale, "common");

    return (
        <Page id="experience" title={t("sections.experience")}>
            <div className="grid grid-cols-2 gap-6">
                {
                    experience.map((block) => <ExperienceBlock data={block.items} key={block.name} />)
                }
            </div>
        </Page>
    )
}