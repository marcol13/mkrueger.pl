type PropTypes = {
  children: string;
};

export const Tag = ({ children }: PropTypes) => {
  return (
    <div className="inline-block rounded border-[1px] text-grey-primary bg-grey-secondary border-none font-semibold hover:scale-105 transition-transform px-2 cursor-default">
      #{children.toLowerCase()}
    </div>
  );
};
