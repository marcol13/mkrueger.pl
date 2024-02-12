import { Page } from "@/components/Page/Page"
import { ExperienceBlock } from "@/components/Experience/ExperienceBlock/ExperienceBlock"

import { useDictionary } from "@/utils/hooks/useDictionary";
import experience from "@/../public/experience.json";

export const Experience = () => {
    const t = useDictionary();

    return (
        <Page id="experience" title={t("sections.experience")}>
            <div className="grid grid-cols-2 gap-6">
                {
                    experience.map((block) => <ExperienceBlock data={block.items} blockType={block.name} key={block.name} />)
                }
            </div>
        </Page>
    )
}