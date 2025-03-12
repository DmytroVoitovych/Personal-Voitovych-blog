import Link from "next/link";
import styles from './NavComponent.module.css';

const NavComponent = ({mobile}:{mobile:boolean}) => {
  return (
    <nav className={styles.navBlock}  data-mobile={mobile}>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/newsletter">Newsletter</Link>
    </nav>
  );
};

export default NavComponent;
