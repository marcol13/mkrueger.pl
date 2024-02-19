import { Text } from "../Text/Text";

type PropTypes = {
	children: string | JSX.Element;
	id?: string;
	title?: string;
	className?: string;
	fullHeight?: boolean;
};

export const Page = ({ children, id, title, className, fullHeight }: PropTypes) => {
	return (
		<div
			className={`${fullHeight ? "min-h-[calc(100vh_-_theme(spacing.navbar-height))]" : "mb-6 md:mb-10"} py-6 px-4 mt-navbar-height flex flex-col justify-center scroll-mt-navbar-height ${className ? className : ""}`}
			id={id}
		>
			{title && <Text variant="h2" className="mb-10 md:mb-16 ml-6 relative before:content-[''] before:block before:absolute before:bg-dots before:-top-2 before:-left-6 before:w-[37px] before:h-[37px] before:-z-10 text-secondary dark:text-primary">{title}</Text>}
			<div>{children}</div>
		</div>
	);
};
