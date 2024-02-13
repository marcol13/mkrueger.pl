"use client";

import { About } from "@/pages/About/About";
import { Portfolio } from "@/pages/Portfolio/Portfolio";
import { Contact } from "@/pages/Contact/Contact";
import { Experience } from "@/pages/Experience/Experience";

export default function Home({ params: { lang } }: { params: { lang: string } }) {

  return (
    <>
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}
