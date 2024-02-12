import { ExperienceItem } from "../ExperienceItem/ExperienceItem";
import { ExperienceItemType } from "@/utils/types/ExperienceType";

type PropTypes = {
	data: ExperienceItemType[];
};

export const ExperienceBlock = ({ data }: PropTypes) => {
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
						key={name}
					/>
				))}
			</ul>
		</div>
	);
};
