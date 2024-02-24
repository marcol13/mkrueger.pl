type PropTypes = {
  children?: string | JSX.Element;
  className?: string;
};

export const Emphasize = ({ children, className }: PropTypes) => {
  return (
    <em
      className={`relative whitespace-nowrap font-bold not-italic transition-colors before:absolute before:-left-0.5 before:-top-0.5 before:-z-10 before:h-full before:w-[103%] before:skew-x-12 before:bg-primary dark:before:bg-accent before:content-[''] hover:text-secondary ${className ?? ""}`}
    >
      {children}
    </em>
  );
};
