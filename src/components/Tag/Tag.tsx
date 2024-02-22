type PropTypes = {
  children: string;
};

export const Tag = ({ children }: PropTypes) => {
  return (
    <p className="inline-block rounded border-[1px] border-slate-400 px-2">
      {children}
    </p>
  );
};
