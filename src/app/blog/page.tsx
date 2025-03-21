import { ArticlesList } from "@/components/allArticlesList/ArticlesList";
import styles from "./page.module.css";

const blogDatabaseQuery: ["title", "id", "publishedAt", "slug", "description"] = [
  "title",
  "id",
  "publishedAt",
  "slug",
  "description",
];

const Blog = () => {
  return (
    <section className={`${styles.sectionBlog} text-preset-2`}>
      <h1>My Articles</h1>
      <p className="text-preset-7">
        Below are all my recent blog posts. Click on any title to read the full
        article.
      </p>
      <hr className="divider" />
      <ArticlesList query={blogDatabaseQuery} />
      <hr className="divider" />
    </section>
  );
};

export default Blog;
