// import Image from "next/image";
import { LogoGithub, LogoLinkedin, LogoMentor, LogoX } from "@/utils/svglist";
import styles from "./page.module.css";
import { ArticlesList } from "@/components/allArticlesList/ArticlesList";
import { ShowAllArticles } from "@/components/moreArticles/ShowAllArticles";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className="text-preset-2">Hi, I’m Dmytro 👋</h1>
        <p className="text-preset-7">
          I’m on a journey to become a front-end web developer. I love building
          little projects, trying out new coding techniques, and sharing what I learn
          along the way. When I’m not at my desk, you’ll find me reading, hiking
          through the mountains, or challenging myself on rock-climbing walls.
          <br />
          <br />I started this blog to document my progress, keep myself accountable,
          and hopefully inspire anyone else who’s learning to code. Welcome to my
          corner of the internet, and thanks for stopping by!
        </p>
        <ul className={styles.heroLink}>
          <li>
            <a rel="noreferrer" target="_blank" href="https://x.com/">
              <LogoX width="16" height="16" />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/DmytroVoitovych"
            >
              <LogoGithub width="16" height="16" />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/dmytro-voitovych/"
            >
              <LogoLinkedin width="16" height="16" />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.frontendmentor.io/profile/DmytroVoitovych"
            >
              <LogoMentor width="16" height="16" />
            </a>
          </li>
        </ul>
        <hr className="divider" />
      </section>
      <section className={styles.latestArticles}>
        <h2 className="text-preset-2">Latest Articles</h2>
        <ArticlesList />
        <ShowAllArticles />
        <hr className="divider" />
        
      </section>
    </>
  );
}
