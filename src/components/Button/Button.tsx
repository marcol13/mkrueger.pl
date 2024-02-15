import { MouseEventHandler } from "react"

type PropTypes = {
    children: string | JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
}

export const Button = ({children, onClick, className}: PropTypes) => {
    return (
        <button onClick={onClick} className={`p-2 border-2 border-slate-2 rounded bg-box ${className ?? ""}`}>
            {children}
        </button>
    )
}