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
  const { t } = useDictionary();
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

  const transitionStyles = {
    mobileTransformOpen: "scale-y-100 [transition:transform_0.3s_ease-in-out]",
    mobileTransformClose:
      "scale-y-0 [transition:transform_0.3s_ease-in-out_0.4s]",
    mobileOpacityOpen: "opacity-100 [transition:opacity_0.2s_linear_0.4s]",
    mobileOpacityClose: "opacity-0 [transition:opacity_0.2s_linear]",
  };

  const glassEffectStyles =
    "shadow-glass backdrop-filter backdrop-blur-md bg-opacity-10 dark:bg-opacity-10";

  // TODO: Motion reduce
  return (
    <header
      className={`fixed top-0 z-50 flex h-navbar-height w-screen items-center justify-between bg-white px-4 md:justify-around md:px-0  dark:bg-black ${glassEffectStyles}`}
    >
      <div className="flex">
        <span className="flex items-center justify-center before:mr-2 before:block before:h-4 before:w-4 before:rounded-full before:bg-primary before:content-['']"></span>
        <Link href="#">
          <Text variant="h1" className="text-xl font-bold">
            Marcin Krueger
          </Text>
        </Link>
      </div>
      <nav
        className={`${menuOpen ? transitionStyles.mobileTransformOpen : transitionStyles.mobileTransformClose} absolute left-0 top-0 z-50 md:transition-none flex h-screen w-screen origin-top items-center justify-center bg-background md:static md:block md:h-auto md:w-auto md:scale-y-100 md:bg-transparent md:opacity-100`}
      >
        <ul
          className={`${menuOpen ? transitionStyles.mobileOpacityOpen : transitionStyles.mobileOpacityClose} flex flex-col items-center justify-center gap-10 text-center md:flex-row md:gap-6 md:opacity-100`}
        >
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
          onClick={() => setMenuOpen(!menuOpen)}
          className="z-[51] block md:hidden"
        >
          <Icon
            variant={menuOpen ? "close" : "hamburger"}
            size="l"
            className="text-slate-300 dark:text-slate-500"
          />
        </Button>
      </div>
    </header>
  );
};
