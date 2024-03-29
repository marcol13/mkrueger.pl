import { Text } from "../Text/Text";

type PropTypes = {
  children: string | JSX.Element;
  id?: string;
  title?: string;
  className?: string;
  fullHeight?: boolean;
};

export const Page = ({
  children,
  id,
  title,
  className,
  fullHeight,
}: PropTypes) => {
  return (
    <div
      className={`${fullHeight ? "min-h-[calc(100vh_-_theme(spacing.navbar-height))] mt-navbar-height" : "mb-6 md:mb-10 mt-8"}  flex flex-col scroll-mt-navbar-height justify-center px-4 py-6 ${className ? className : ""}`}
      id={id}
    >
      {title && (
        <Text
          variant="h2"
          className="relative mb-10 ml-6 text-primary before:absolute before:-left-6 before:-top-2 before:-z-10 before:block before:h-[37px] before:w-[37px] before:bg-dots before:content-[''] md:mb-16"
        >
          {title}
        </Text>
      )}
      <div>{children}</div>
    </div>
  );
};
