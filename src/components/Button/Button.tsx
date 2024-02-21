import { MouseEventHandler } from "react"

type PropTypes = {
    children: string | JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
    variant ?: keyof typeof styles
}

const styles = {
    common: "border-2 border-slate-2 bg-slate-100",
    header: "ring-1 shadow-zinc-800/5 shadow-lg border-none bg-white/90"
}

export const Button = ({children, onClick, className, variant="common"}: PropTypes) => {
    
    return (
        <button onClick={onClick} className={`p-2 dark:bg-box rounded ${styles[variant]} ${className ?? ""}`}>
            {children}
        </button>
    )
}