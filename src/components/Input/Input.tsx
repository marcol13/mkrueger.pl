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
      <label htmlFor={id} className="text-slate-2 text-lg font-semibold">
        {label}
      </label>
      {type === "longText" ? (
        <textarea
          id={id}
          className="h-40 resize-none rounded border-2 bg-box pl-2"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          className="h-10 rounded border-2 bg-box pl-2"
        />
      )}
    </div>
  );
};
