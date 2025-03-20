import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import styles from './ArticlesList.module.css';
import { getLocalDate } from "./helpers";

export const ArticlesList = async () => {
  const supabase = await createClient();

  const { data: articles } = await supabase
    .from("Developers articles")
    .select("title,id,publishedAt");

  return (
    <ul className={styles.allArticlesList}>
      {articles?.map((post) => (
        <li key={post.id} >
            <Link href={`/${post.title}`} className="text-preset-5" >{post.title}</Link>
            <span className="text-preset-8-italic">{getLocalDate(post.publishedAt!)}</span>
            </li>
      ))}
    </ul>
  );
};
