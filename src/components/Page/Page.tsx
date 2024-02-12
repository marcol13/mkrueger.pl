import { Text } from "../Text/Text";

type PropTypes = {
	children: string | JSX.Element;
	id?: string;
	title?: string;
};

export const Page = ({ children, id, title }: PropTypes) => {
	return (
		<div
			className="min-h-[calc(100vh_-_theme(spacing.navbar-height))] py-6 px-4 mt-navbar-height flex flex-col justify-center"
			id={id}
		>
			{title && <Text variant="h2" className="mb-16 ml-6 relative before:content-[''] before:block before:absolute before:bg-dots before:-top-2 before:-left-6 before:w-[37px] before:h-[37px] before:-z-10">{title}</Text>}
			<div>{children}</div>
		</div>
	);
};
