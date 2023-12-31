type PropTypes = {
  children: string | JSX.Element;
  id?: string;
};

export const Page = ({ children, id }: PropTypes) => {
  return (
    <div className="min-h-screen py-6 px-4" id={id}>
      {children}
    </div>
  );
};
