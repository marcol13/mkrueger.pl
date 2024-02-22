import { technologies } from "@/utils/technologies";
import Image from "next/image";

type PropTypes = {
  name: string;
};

export const TechIcon = ({ name }: PropTypes) => {
  return (
    <div className="flex flex-row items-center gap-2 rounded border bg-white p-1 dark:text-background">
      <Image
        src={
          technologies[name]?.icon
            ? require(`@/assets/tech/${technologies[name]?.icon}`)
            : require(`@/assets/tech/default.png`)
        }
        alt={technologies[name]?.name ?? name}
        width={24}
        height={24}
      />
      <p>{technologies[name]?.name ?? name}</p>
    </div>
  );
};
