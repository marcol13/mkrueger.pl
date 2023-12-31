import { Icon } from "../Icon/Icon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 py-6 border-t-2 border-black">
      <div>
        <ul className="flex list-none gap-2">
          <li>
            <Link
              href="https://github.com/marcol13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon variant="github" size="l" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/marcin-krueger-432bb9243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon variant="linkedin" size="l" />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/marcol131"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon variant="twitter" size="l" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        Copyright &copy; 2024; Designed and implemented by{" "}
        <Link
          href="https://github.com/marcol13"
          target="_blank"
          rel="noopener noreferrer"
        >
          @marcol13
        </Link>
      </div>
    </footer>
  );
};
