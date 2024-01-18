import { Text } from "../Text/Text";

type PropTypes = {
	children: string | JSX.Element;
	id?: string;
	title?: string;
};

export const Page = ({ children, id, title }: PropTypes) => {
	return (
		<div
			className="min-h-[calc(100vh_-_theme(spacing.navbar-height))] py-6 px-4 mt-navbar-height flex justify-center"
			id={id}
		>
			{title && <Text variant="h2">{title}</Text>}
			<div className="flex items-center">{children}</div>
		</div>
	);
};
