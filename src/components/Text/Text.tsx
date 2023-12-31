type PropTypes = {
  variant?: TextVariants;
  className?: string;
  children: string | JSX.Element;
};
type TextVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export const Text = ({ variant = "p", className, children }: PropTypes) => {
  const Component = variant;
  const classNameStyles = {
    h1: "text-3xl font-bold",
    h2: "text-5xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-base font-bold",
    h6: "text-sm font-bold",
    p: "text-base",
    span: "",
  };

  const styles = [classNameStyles[variant], className]
    .filter((el) => el !== undefined)
    .join(" ");

  return <Component className={styles}>{children}</Component>;
};
