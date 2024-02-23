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
        className="relative text-lg tracking-wide before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-full before:origin-right before:scale-x-0 before:rounded-sm before:bg-secondary before:transition-transform before:content-[''] hover:text-secondary hover:before:origin-left hover:before:scale-x-100 dark:before:bg-primary dark:hover:text-primary"
      >
        {text}
      </Link>
    </li>
  );
};
