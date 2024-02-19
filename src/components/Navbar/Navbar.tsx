"use client";

import { Text } from "../Text/Text";
import { DarkModeSwitch } from "@/components/Switch/DarkModeSwitch";
import { LanguageSwitch } from "../Switch/LanguageSwitch";
import { useDictionary } from "@/utils/hooks/useDictionary";
import { NavbarLink } from "./NavbarLink";
import Link from "next/link";

export const Navbar = () => {
  const t = useDictionary();

  const links = [
    {
      href: "#about",
      text: t("navbar.about"),
    }, {
      href: "#projects",
      text: t("navbar.projects"),
    }, {
      href: "#experience",
      text: t("navbar.experience"),
    }, {
      href: "#contact",
      text: t("navbar.contact"),
    }
  ]

  return (
    <header className="flex items-center justify-around h-navbar-height border-b-[1px] border-content fixed top-0 w-screen bg-white dark:bg-background z-50">
      <div className="flex">
        <span className="flex items-center justify-center before:mr-2 before:rounded-full before:content-[''] before:block before:h-4 before:w-4 before:bg-primary"></span>
        <Link href="#">
          <Text variant="h1" className="text-xl font-bold">
            Marcin Krueger
          </Text>
        </Link>
      </div>
      <nav>
        <ul className="flex flex-row gap-4">
          {
            links.map((link) => (
              <NavbarLink key={link.text} href={link.href} text={link.text} />
            ))
          }
        </ul>
      </nav>
      <div className="flex flex-row gap-4">
        <DarkModeSwitch />
        <LanguageSwitch />
      </div>
    </header>
  );
};
