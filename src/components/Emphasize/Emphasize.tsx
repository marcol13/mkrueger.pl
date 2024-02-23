type PropTypes = {
    children?: string | JSX.Element;
    className?: string;
}

export const Emphasize = ({ children, className }: PropTypes) => {
  return (
    <em className={`font-bold whitespace-nowrap not-italic hover:text-secondary dark:hover:text-primary transition-colors dark:before:bg-secondary before:content-[''] relative before:absolute before:w-[103%] before:h-full before:-top-0.5 before:-left-0.5 before:bg-primary before:skew-x-12 before:-z-10 ${className ?? ""}`}>
      {children}
    </em>
  );
};