import Link from "next/link";

type PropTypes = {
    href: string;
    text: string;
}

export const NavbarLink = ({href, text}: PropTypes) => {
    return (
        <li>
            <Link href={href} className="hover:text-secondary dark:hover:text-primary" >{text}</Link>
        </li>
    );
}