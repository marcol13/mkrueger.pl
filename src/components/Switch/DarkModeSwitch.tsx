"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

export const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  //   localStorage.getItem("darkMode") !== null
  //     ? JSON.parse(localStorage.getItem("darkMode") as string)
  //     : false
  // );
  const [mounted, setMounted] = useState<boolean | null>();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      onClick={() => {
        localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
        setTheme(theme === "dark" ? "light" : "dark")
        setIsDarkMode((prev) => !prev);
      }}
    >
      <Icon variant={isDarkMode ? "moon" : "sun"} size="l" color="content" />
    </Button>
  );
};
