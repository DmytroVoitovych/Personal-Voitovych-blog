import Image from "next/image";
import avatar from "@/assets/images/avatar.jpeg";
import styles from "./Header.module.css";
import ThemeSwitcher from "./temeSwitcher/ThemeSwitcher";
import NavComponent from "./navComponent/NavComponent";
import { Menu } from "@/utils/svglist";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        width={40}
        height={40}
        alt="author face photo"
        src={avatar}
        className={styles.avatar}
        quality={100}
      />
      <div className={styles.rightBlock}>
        <NavComponent mobile={false}/>
        <button>
        <Menu />
      </button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
