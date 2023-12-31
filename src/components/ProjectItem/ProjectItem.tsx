import Image from "next/image";
import { Text } from "../Text/Text";

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
            {/* <span className="bold">Opis: </span> */}
            {shortDesc}
          </Text>
          <div className="flex flex-wrap gap-4">
            {techStack.map((el: string) => (
              <p key={el}>{el}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
