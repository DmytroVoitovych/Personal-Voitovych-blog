import styles from "./Footer.module.css";
import  SocialLink  from "./shared/SocialLink";

 const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="text-preset-8">Made with ❤️ and ☕️</p>
      <SocialLink className={styles.footerLink} width={16} height={16} />
    </footer>
  );
};


export default Footer;