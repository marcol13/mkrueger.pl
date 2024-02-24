import { ExperienceItem } from "../ExperienceItem/ExperienceItem";
import { ExperienceItemType } from "@/utils/types/ExperienceType";
import { Text } from "@/components/Text/Text";

type PropTypes = {
  data: ExperienceItemType[];
  title: string;
  blockType: string;
};

export const ExperienceBlock = ({ data, title, blockType }: PropTypes) => {
  return (
    <div className="h-full rounded bg-box p-4">
      <Text variant="h3" className="mb-8">{title}</Text>
      <ul>
        {data.map(({ name, location, position, dates, description }) => (
          <ExperienceItem
            name={name}
            location={location}
            dates={dates}
            position={position}
            description={description}
            blockType={blockType}
            key={name}
          />
        ))}
      </ul>
    </div>
  );
};
