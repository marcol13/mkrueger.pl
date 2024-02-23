"use client";

import { useState } from "react";
import { Text } from "../Text/Text";
import { DarkModeSwitch } from "@/components/Switch/DarkModeSwitch";
import { LanguageSwitch } from "../Switch/LanguageSwitch";
import { useDictionary } from "@/utils/hooks/useDictionary";
import { NavbarLink } from "./NavbarLink";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import Link from "next/link";

export const Navbar = () => {
  const t = useDictionary();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      href: "#about",
      text: t("navbar.about"),
    },
    {
      href: "#projects",
      text: t("navbar.projects"),
    },
    {
      href: "#experience",
      text: t("navbar.experience"),
    },
    {
      href: "#contact",
      text: t("navbar.contact"),
    },
  ];

  const mobileMenuStyles =
    "absolute top-0 left-0 w-screen h-screen flex flex-col bg-background z-50 items-center justify-center text-center md:static md:w-auto md:h-auto";

    // TODO: Motion reduce
  return (
    <header className="fixed top-0 z-50 flex h-navbar-height w-screen items-center justify-between border-b-[1px] border-content bg-background px-4 md:justify-around md:px-0">
      <div className="flex">
        <span className="flex items-center justify-center before:mr-2 before:block before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']"></span>
        <Link href="#">
          <Text variant="h1" className="text-xl font-bold">
            Marcin Krueger
          </Text>
        </Link>
      </div>
      <nav className={`${menuOpen ? mobileMenuStyles : "hidden"} md:block`}>
        <Button
          className="absolute left-10 top-10 block border-none bg-transparent md:hidden"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <Icon variant="close" size="xl" />
        </Button>
        <ul className="flex flex-col gap-20 md:flex-row md:gap-6">
          {links.map((link) => (
            <NavbarLink key={link.text} href={link.href} text={link.text} />
          ))}
          <li className="flex justify-center md:hidden">
            <LanguageSwitch />
          </li>
        </ul>
      </nav>
      <div className="flex flex-row items-center gap-4">
        <DarkModeSwitch />
        <LanguageSwitch className="hidden md:flex" />
        <Button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden"
        >
          <Icon
            variant="hamburger"
            size="l"
            className="text-slate-300 dark:text-slate-500"
          />
        </Button>
      </div>
    </header>
  );
};
