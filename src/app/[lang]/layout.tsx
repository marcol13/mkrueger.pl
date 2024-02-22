import { LocaleTypes } from "../i18n/settings";
import { Fira_Sans } from "next/font/google";
import type { Metadata } from "next";
import "@/assets/globals.css";
import "@/assets/variables.css";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const font = Fira_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcin Krueger • Resume",
  description:
    "Frontend developer and machine learning/devops enthusiast. I possess skills in creating responsive interfaces. Explore my abilities and projects on my professional online CV.",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: LocaleTypes };
}) {
  return (
    <html
      lang={lang}
      // style={{ colorScheme: "light" }} // <--
      // className={"light"}
    >
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="mx-auto flex max-w-page-width flex-col">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
