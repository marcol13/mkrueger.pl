import { ExperienceItemType } from "@/utils/types/ExperienceType";
import { Text } from "../../Text/Text";

interface PropTypes extends ExperienceItemType {
  blockType: string;
}

export const ExperienceItem = ({
  name,
  location,
  position,
  dates,
  description,
  blockType,
}: PropTypes) => {
  return (
    <li
      className={`before:content[''] relative ml-10 list-none pb-6 pl-2 before:-left-8 before:block last:pb-2 ${blockType === "education" ? "before:bg-edu" : "before:bg-work"} after:content[''] before:absolute before:top-0 before:h-6 before:w-6 after:absolute after:-left-[1.3rem] after:bottom-1 after:top-6 after:block after:w-[2px] after:bg-secondary`}
    >
      <Text>{name}</Text>
      <Text variant="h3">{position}</Text>
      <div className="flex flex-row gap-4">
        <Text>{`📅 ${dates}`}</Text>
        <Text>{`📌 ${location}`}</Text>
      </div>
      {description && <Text className="mt-4">{description}</Text>}
    </li>
  );
};
