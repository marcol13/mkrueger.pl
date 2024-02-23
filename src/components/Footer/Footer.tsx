import { Icon } from "../Icon/Icon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex h-navbar-height flex-col items-center justify-center gap-2 border-t-[1px] border-content">
      <div>
        <ul className="flex list-none gap-2">
          <li>
            <Link
              href="https://github.com/marcol13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                variant="github"
                size="l"
                className="text-primary"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/marcin-krueger-432bb9243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                variant="linkedin"
                size="l"
                className="text-primary"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/marcol131"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                variant="twitter"
                size="l"
                className="text-primary"
              />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center">
        Copyright &copy; 2024; Designed and implemented by{" "}
        <Link
          href="https://github.com/marcol13"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          @marcol13
        </Link>
      </p>
    </footer>
  );
};
