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
      className={`before:content[''] relative ml-10 list-none pb-6 pl-2 before:-left-[1.73rem] before:block before:shadow-bulb last:pb-2 before:bg-primary dark:before:bg-primary before:rounded-full after:content[''] before:absolute before:top-1 before:h-4 before:w-4 after:absolute after:-left-[1.3rem] after:bottom-0.5 after:top-6 after:block after:w-[2px] after:bg-primary`}
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
