import { useId } from "react";

type PropTypes = {
  label: string;
  type?: "text" | "longText" | "email";
  className?: string;
};

export const Input = ({ label, type = "text", className }: PropTypes) => {
  const id = useId();

  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      <label
        htmlFor={id}
        className="text-slate-2 font-semibold text-lg"
      >
        {label}
      </label>
      {type === "longText" ? (
        <textarea id={id} className="rounded h-40 pl-2 resize-none border-2 bg-box"></textarea>
      ) : (
        <input type={type} id={id} className="rounded h-10 pl-2 border-2 bg-box" />
      )}
    </div>
  );
};
