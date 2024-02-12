import { ExperienceItemType } from "@/utils/types/ExperienceType";
import { Text } from "../../Text/Text";

type PropTypes = ExperienceItemType;

export const ExperienceItem = ({
	name,
	location,
	position,
	dates,
	description,
}: PropTypes) => {
	return (
		<li className="list-none ml-10 pl-2 pb-6 last:pb-2 relative before:content[''] before:block before:-left-8 before:bg-edu before:absolute before:top-0 before:w-6 before:h-6 after:content[''] after:block after:-left-5 after:bottom-1 after:absolute after:top-6 after:w-[2px] after:bg-slate-600">
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
