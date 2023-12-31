"use client";

import { useState } from "react";
import {usePathname, useParams} from 'next/navigation';
import { Navbar } from "@/components/Navbar/Navbar";
import {useTranslation} from "@/app/i18n/client";
import { LocaleTypes } from "../i18n/settings";
import { About } from "@/pages/About/About";
import { Portfolio } from "@/pages/Portfolio/Portfolio";
import { Contact } from "@/pages/Contact/Contact";
import { Experience } from "@/pages/Experience/Experience";

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  const pathName = usePathname();
  const locale = useParams()?.locale as LocaleTypes;
  const {t} = useTranslation(locale, 'common');

  return (
    <>
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}
