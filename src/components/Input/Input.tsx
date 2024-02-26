import { useId, forwardRef, Ref, RefObject, MutableRefObject } from "react";

type InputType = "text" | "longText" | "email";

type PropTypes = {
  label: string;
  type?: InputType;
  className?: string;
};

// TODO: Change any to HTMLInputElement | HTMLTextAreaElement
export const Input = forwardRef<any, PropTypes>(({ label, type = "text", className }, ref) => {
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
          ref={ref}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          className="h-10 rounded border-2 bg-box pl-2"
          ref={ref}
        />
      )}
    </div>
  );
});
