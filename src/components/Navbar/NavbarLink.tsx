import Link from "next/link";

type PropTypes = {
  href: string;
  text: string;
};

export const NavbarLink = ({ href, text }: PropTypes) => {
  return (
    <li>
      <Link
        href={href}
        className="relative text-lg tracking-wide before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:rounded-sm before:bg-primary before:transition-transform before:content-[''] hover:text-primary hover:before:origin-left hover:before:scale-x-100"
      >
        {text}
      </Link>
    </li>
  );
};
