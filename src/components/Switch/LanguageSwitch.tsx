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

type PropTypes = {
  className ?: string
}

export const LanguageSwitch = ({className} : PropTypes) => {
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
    <div className={`flex gap-2 ${className ? className : ""}`}>
      <button
        onClick={() => {
          if (lang !== "pl") router.push(`/pl`);
          localStorage.setItem("lang", "pl");
          setLang("pl");
        }}
      >
        <Image
          src={poland}
          alt="polish language picker"
          className={`w-8 h-8 ${lang !== "pl" && inactive}`}
        />
      </button>
      <span className="w-[1px] bg-slate-400 relative top-0 left-0 block"></span>
      <button
        onClick={() => {
          if (lang !== "en") router.push(`/en`);
          localStorage.setItem("lang", "en");
          setLang("en");
        }}
      >
        <Image
          src={brittain}
          alt="english language picker"
          className={`w-8 h-8 ${lang !== "en" && inactive}`}
        />
      </button>
    </div>
  );
};
