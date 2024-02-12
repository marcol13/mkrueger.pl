import { ExperienceItem } from "../ExperienceItem/ExperienceItem";
import { ExperienceItemType } from "@/utils/types/ExperienceType";

type PropTypes = {
	data: ExperienceItemType[];
	blockType: string;
};

export const ExperienceBlock = ({ data, blockType }: PropTypes) => {
	return (
		<div className="bg-slate-100 p-4 h-full rounded">
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
