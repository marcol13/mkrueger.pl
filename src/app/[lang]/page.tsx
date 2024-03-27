"use client";

import { About } from "@/views/About/About";
import { Portfolio } from "@/views/Portfolio/Portfolio";
import { Contact } from "@/views/Contact/Contact";
import { Experience } from "@/views/Experience/Experience";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}
