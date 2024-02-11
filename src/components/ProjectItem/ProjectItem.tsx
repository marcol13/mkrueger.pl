import { useState } from "react";
import { Text } from "../Text/Text";
import { TechIcon } from "../TechIcon/TechIcon";
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
			<div className="grid grid-cols-2 border-2 p-2">
				<Image
					src={img}
					alt={`Project ${title}`}
					width={256}
					height={256}
					placeholder="blur"
					blurDataURL="../../assets/images/project-template.png"
					// onError={() => setImageSource("@/assets/images/project-template.png")}
				/>
				<div className="flex flex-col gap-4">
					<Text variant="h3" className="underline">
						{title}
					</Text>
					<Text>{shortDesc}</Text>
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
