import { SocialLink } from "@/components/shared/SocialLink";
import styles from "./page.module.css";
import ArtDirectionImage from "@/components/shared/ArtDirectionImage";

export default function About() {
  return (
    <section className={styles.sectionAbout}>
      <h1 className="text-preset-2">About Me</h1>
      <p className="text-preset-7">
        Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for creativity and
        problem-solving. That’s what led me to the world of front-end web development. There’s
        something magical about seeing an idea come to life in the browser—whether it’s a simple
        layout experiment or a complex interface for a bigger project.
        <br />
        <br />
        When I’m not coding, I love getting lost in a good book. My taste is pretty eclectic: I’ll
        happily read everything from fantasy novels to biographies of tech pioneers. Reading helps
        me unwind and often sparks new ideas for my coding projects.
        <br />
        <br />
        Another big passion of mine is the great outdoors. Hiking allows me to disconnect from the
        digital world and reconnect with nature. I love challenging hikes with rewarding views at
        the top. And if I’m not on the trails, you might catch me rock climbing. The combination of
        mental focus and physical endurance is a perfect parallel to tackling tough coding
        challenges!
      </p>
      <div className={styles.listBlock}>
        <p className="text-preset-7">Some of my favorite books:</p>
        <ul className={styles.citeList}>
          <li className="text-preset-7">
            <q className="text-preset-7-semibold">The Pragmatic Programmer</q> by Andrew Hunt and
            David Thomas (for helpful insights into software development)
          </li>
          <li className="text-preset-7">
            <q className="text-preset-7-semibold">Ready Player One</q> by Ernest Cline (for some
            futuristic escapism)
          </li>
          <li className="text-preset-7">
            <q className="text-preset-7-semibold">The Hobbit</q> by J.R.R. Tolkien (for a bit of
            fantasy fun)
          </li>
          <li className="text-preset-7">
            <q className="text-preset-7-semibold">Educated</q> by Tara Westover (for incredible
            inspiration)
          </li>
        </ul>
        <p className="text-preset-7">
          I absolutely love my workspace as a place that inspires me to do my best work, so I
          thought I’d share it with you:
        </p>
      </div>
      <ArtDirectionImage className={styles.picture} />
      <p className="text-preset-7">
        I hope this blog not only documents my growth but also helps others see that coding can be
        for everyone. Thanks for joining me on this journey!
      </p>
      <div className={styles.socialBlock}>
        <strong className="text-preset-4">Follow me</strong>
        <SocialLink className={styles.aboutLink} width={16} height={16} />
      </div>
      <hr className="divider" />
    </section>
  );
}
