"use client";
import { useState } from "react";
import styles from "./ShowAllArticles.module.css";

export const ShowAllArticles = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label htmlFor="showArticles" className={`${styles.showArticles} text-preset-6`}>
      View {checked ? "less" : "all"} articles
      <input
        type="checkbox"
        name="showArticles"
        id="showArticles"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
    </label>
  );
};
