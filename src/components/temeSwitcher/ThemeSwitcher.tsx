"use client";
import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.css";
import { syncThemeWithStorage } from "./helper";
import { Moon, Sun } from "@/utils/svglist";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const switchTheme = (): void => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
    syncThemeWithStorage();
  };

  useEffect(() => {
    const syncTheme = window.localStorage?.getItem("theme") as "dark" | null;
    if (syncTheme) {
      setTheme(syncTheme);
      document.documentElement.classList.toggle("dark");
    }
  }, []);

  return (
    <label className={styles.themeSwitcher} htmlFor="theme">
      <input
        type="checkbox"
        name="theme"
        id="theme"
        onChange={switchTheme}
        checked={theme === "dark"}
      />
      {theme !== "dark" ? <Moon /> : <Sun />}
    </label>
  );
};

export { ThemeSwitcher };
