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
      <Link className={isActive("/")} href="/" aria-current={pathname === "/" ? "page" : undefined}>
        Home
      </Link>
      <Link
        className={isActive("/blog")}
        href="/blog"
        aria-current={pathname === "/blog" ? "page" : undefined}
      >
        Blog
      </Link>
      <Link
        className={isActive("/about")}
        href="/about"
        aria-current={pathname === "/about" ? "page" : undefined}
      >
        About
      </Link>
      <Link
        className={isActive("/newsletter")}
        href="/newsletter"
        aria-current={pathname === "/newsletter" ? "page" : undefined}
      >
        Newsletter
      </Link>
    </nav>
  );
};

export { NavComponent };
