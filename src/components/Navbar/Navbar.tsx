"use client";

import { Text } from "../Text/Text";
import { DarkModeSwitch } from "@/components/Switch/DarkModeSwitch";
import { LanguageSwitch } from "../Switch/LanguageSwitch";
import { useDictionary } from "@/utils/hooks/useDictionary";
import Link from "next/link";

export const Navbar = () => {
  const t = useDictionary();

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
          <li>
            <Link href="#about">{t("navbar.about")}</Link>
          </li>
          <li>
            <Link href="#projects">{t("navbar.projects")}</Link>
          </li>
          <li>
            <Link href="#experience">{t("navbar.experience")}</Link>
          </li>
          <li>
            <Link href="#contact">{t("navbar.contact")}</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row gap-4">
        <DarkModeSwitch />
        <LanguageSwitch />
      </div>
    </header>
  );
};
