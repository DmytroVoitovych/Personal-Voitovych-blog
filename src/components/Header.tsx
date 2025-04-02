"use client";

import Image from "next/image";
import avatar from "@/assets/images/avatar.jpeg";
import styles from "./Header.module.css";
import { ThemeSwitcher } from "./temeSwitcher/ThemeSwitcher";
import { NavComponent } from "./navComponent/NavComponent";
import { Close, Menu } from "@/utils/svglist";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <header className={styles.header} data-menu={show}>
      <Image
        width={40}
        height={40}
        alt="author face photo"
        src={avatar}
        className={styles.avatar}
        quality={100}
      />
      <div className={styles.rightBlock}>
        <NavComponent mobile={false} />
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <Close /> : <Menu />}
        </button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export { Header };
