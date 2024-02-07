import Image from "next/image";
import { Text } from "../Text/Text";
import { TechIcon } from "../TechIcon/TechIcon";

type PropTypes = {
  title: string;
  img: string;
  shortDesc: string;
  techStack: string[];
  className?: string;
};

export const ProjectItem = ({
  title,
  img,
  shortDesc,
  techStack,
  className,
}: PropTypes) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-2">
        <Image src={img} alt={`Project ${title}`} width={512} height={512} />
        <div>
          <Text variant="h3" className="underline">
            {title}
          </Text>
          <Text>
            {shortDesc}
          </Text>
          <div className="flex flex-wrap gap-2">
            {techStack.map((el: string) => (
              <TechIcon key={el} name={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
