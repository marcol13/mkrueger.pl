import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "@/utils/constants";
import { IconType } from "@/utils/types/common";
import Link from "next/link";

const socialLinks: {href: string, icon: IconType}[] = [
  {
    href: `mailto:${EMAIL}`,
    icon: "mail",
  },
  {
    href: LINKEDIN,
    icon: "linkedin",
  },
  {
    href: GITHUB,
    icon: "github",
  },
  {
    href: TWITTER,
    icon: "twitter",
  },
];

export const Footer = () => {
  return (
    <footer className="shadow-footer flex flex-col p-8 md:p-0 gap-8 md:flex-row-reverse min-h-navbar-height items-center justify-around md:gap-2 bg-black text-background dark:text-content">
      <div>
        <ul className="flex list-none gap-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <Icon
                  variant={link.icon}
                  size="l"
                  className="text-grey-primary"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Text className="text-center">
        Copyright &copy; 2024; Designed and implemented by{" "}
        <Link
          href="https://github.com/marcol13"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary"
        >
          @marcol13
        </Link>
      </Text>
      <Text>Marcin Krueger</Text>
    </footer>
  );
};
