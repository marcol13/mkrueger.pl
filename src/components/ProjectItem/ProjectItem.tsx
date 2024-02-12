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
			<div className="flex gap-2 border-2 p-2">
				<Image
					src={defaultImage}
					alt={`Project ${title}`}
					width={256}
					height={256}
					className="rounded-md mr-8"
					// placeholder="blur"
					// blurDataURL="../../assets/images/project-template.png"
					// onError={() => setImageSource("@/assets/images/project-template.png")}
				/>
				<div className="flex flex-col gap-4 justify-between basis-full">
					<Text variant="h3" className="underline text-center">
						{title}
					</Text>
					<Text>{shortDesc}</Text>
					<div className="flex flex-wrap gap-2 justify-end">
						{techStack.map((el: string) => (
							<TechIcon key={el} name={el} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
