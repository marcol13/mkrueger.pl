import { useState } from "react";
import { Text } from "../Text/Text";
import { TechIcon } from "../TechIcon/TechIcon";
import defaultImage from "../../assets/images/project-template.png";
import Image from "next/image";

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
  const [imageSource, setImageSource] = useState(img);

  return (
    <div className={className}>
      <div className="flex gap-2 border-2 bg-box p-2">
        <Image
          src={defaultImage}
          alt={`Project ${title}`}
          width={256}
          height={256}
          className="mr-8 hidden rounded-md md:block"
          // placeholder="blur"
          // blurDataURL="../../assets/images/project-template.png"
          // onError={() => setImageSource("@/assets/images/project-template.png")}
        />
        <div className="flex basis-full flex-col justify-between gap-4">
          <div>
            <Text variant="h3" className="text-center underline">
              {title}
            </Text>
            <Text className="mt-4">{shortDesc}</Text>
          </div>
          <div className="flex flex-wrap justify-start gap-1 md:justify-end md:gap-2">
            {techStack.map((el: string) => (
              <TechIcon key={el} name={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
