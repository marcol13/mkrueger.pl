type PropTypes = {
  children: string;
};

export const Tag = ({ children }: PropTypes) => {
  return <p className="border-[1px] border-slate-400 rounded inline-block px-2">{children}</p>;
};
