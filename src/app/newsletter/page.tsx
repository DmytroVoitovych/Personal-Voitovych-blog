import NewsForm from "@/components/formComponent/FormComponent";
import styles from "./page.module.css";

const Page = () => {
  return (
    <section className={styles.newsSection}>
      <h1 className="text-preset-2">Newsletter</h1>
      <p className="text-preset-7">
        Want to stay updated on my latest articles, coding tutorials, and personal adventures? Sign
        up for my newsletter! It’s a simple way to keep track of new posts and occasional coding
        tips I discover. Just drop your email in the sign-up box, and I’ll send you updates whenever
        there’s something new to share.
      </p>
      <strong className="text-preset-5">
        I’d love to have you along for the ride and also hear about your own journey!
      </strong>
      <NewsForm />
    </section>
  );
};

export default Page;
