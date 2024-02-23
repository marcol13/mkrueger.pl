import { MouseEventHandler } from "react";

type PropTypes = {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  variant?: keyof typeof styles;
};

const styles = {
  common: "ring-1 shadow-zinc-800/5 shadow-lg border-none bg-slate-50",
  switch: "font-bold text-slate-300 dark:text-slate-500",
};

export const Button = ({
  children,
  onClick,
  className,
  variant = "common",
}: PropTypes) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded dark:bg-box hover:scale-105 transition-transform ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};
