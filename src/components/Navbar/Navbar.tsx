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

  const mobileMenuStyles = "absolute top-0 left-0 w-screen h-screen flex flex-col bg-white dark:bg-background z-50 items-center justify-center text-center md:static md:w-auto md:h-auto"

  return (
    <header className="flex items-center justify-between px-4 md:px-0 md:justify-around h-navbar-height border-b-[1px] border-content fixed top-0 w-screen bg-white dark:bg-background z-50">
      <div className="flex">
        <span className="flex items-center justify-center before:mr-2 before:rounded-full before:content-[''] before:block before:h-4 before:w-4 before:bg-primary"></span>
        <Link href="#">
          <Text variant="h1" className="text-xl font-bold">
            Marcin Krueger
          </Text>
        </Link>
      </div>
      <nav className={`${menuOpen ? mobileMenuStyles : "hidden"} md:block`}>
        <Button className="block absolute top-10 left-10 md:hidden bg-transparent border-none" onClick={() => {setMenuOpen(false)}}><Icon variant="close" size="xl"/></Button>
        <ul className="flex flex-col md:flex-row gap-20 md:gap-4">
          {
            links.map((link) => (
              <NavbarLink key={link.text} href={link.href} text={link.text} />
            ))
          }
          <li className="flex justify-center md:hidden"><LanguageSwitch /></li>
        </ul>
      </nav>
      <div className="flex flex-row gap-4 items-center">
        <DarkModeSwitch />
        <LanguageSwitch className="hidden md:flex"/>
        <Button variant="header" onClick={() => setMenuOpen(true)} className="block md:hidden">
          <Icon variant="hamburger" size="l" className="text-slate-300 dark:text-slate-500"/>
        </Button>
      </div>
    </header>
  );
};
