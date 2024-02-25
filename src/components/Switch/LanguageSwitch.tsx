import { useState, useEffect } from "react";
import poland from "@/assets/images/poland.png";
import brittain from "@/assets/images/brittain.png";
import Image from "next/image";
import {
  useRouter,
  useParams,
  useSelectedLayoutSegments,
} from "next/navigation";
import { locales } from "@/app/i18n/settings";
import { Button } from "../Button/Button";

type PropTypes = {
  className?: string;
};

export const LanguageSwitch = ({ className }: PropTypes) => {
  const [lang, setLang] = useState("pl");
  const params = useParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (params?.lang) {
        const newLang: string = params.lang as string;
        // @ts-ignore: Unreachable code error
        if (locales.includes(newLang)) {
          setLang(params.lang as string);
          localStorage.setItem("lang", newLang);
        }
      } else setLang(localStorage.getItem("lang") ?? "pl");
    }
  }, [params?.lang]);

  const inactive = "grayscale opacity-50";
  const router = useRouter();

  return (
    <div className={`flex rounded ring-1 shadow-zinc-800/5 shadow-lg border-none bg-white dark:bg-box ${className ? className : ""}`}>
      <Button
        onClick={() => {
          if (lang !== "pl") router.push(`/pl`);
          localStorage.setItem("lang", "pl");
          setLang("pl");
        }}
        variant="switch"
        className={`${lang === "pl" ? "text-white dark:text-black bg-primary dark:bg-primary" : ""}`}
      >
        PL
      </Button>
      <Button
        onClick={() => {
          if (lang !== "en") router.push(`/en`);
          localStorage.setItem("lang", "en");
          setLang("en");
        }}
        variant="switch"
        className={`${lang === "en" ? "text-white dark:text-black bg-primary dark:bg-primary" : ""}`}
      >
        EN
      </Button>
    </div>
  );
};
