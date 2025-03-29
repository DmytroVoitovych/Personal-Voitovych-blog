"use client";
import Link from "next/link";
import styles from "./NavComponent.module.css";
import { usePathname } from "next/navigation";

const NavComponent = ({ mobile }: { mobile: boolean }) => {
  const pathname = usePathname();

  const isActive = (linkName: string): string | "activeLink" =>
    pathname === linkName ? styles?.activeLink || "" : "";

  return (
    <nav className={`${styles.navBlock} text-preset-7`} data-mobile={mobile}>
      <Link className={isActive("/")} href="/">
        Home
      </Link>
      <Link className={isActive("/blog")} href="/blog">
        Blog
      </Link>
      <Link className={isActive("/about")} href="/about">
        About
      </Link>
      <Link className={isActive("/newsletter")} href="/newsletter">
        Newsletter
      </Link>
    </nav>
  );
};

export default NavComponent;
