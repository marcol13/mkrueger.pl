type PropTypes = {
  label: string;
  type?: "text" | "longText" | "email";
  className?: string;
};

export const Input = ({ label, type = "text", className }: PropTypes) => {
  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <label
        htmlFor={label}
        className="border-b-[1px] border-slate-400 max-w-[50%]"
      >
        {label}
      </label>
      {type === "longText" ? (
        <textarea id={label} className="rounded h-8 pl-2 resize-none"></textarea>
      ) : (
        <input type={type} id={label} className="rounded h-8 pl-2" />
      )}
    </div>
  );
};
