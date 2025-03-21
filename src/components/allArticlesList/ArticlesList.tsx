'use server'
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import styles from "./ArticlesList.module.css";
import { getLocalDate } from "./helpers";
import { Database } from "../../../database.types";

type ArticleKeys = keyof Database["public"]["Tables"]["Developers articles"]["Row"];
type RowData = Database["public"]["Tables"]["Developers articles"]["Row"];
interface ArticlesListProps {
  query?: ArticleKeys[];
}

export const ArticlesList = async ({ query }: ArticlesListProps) => {
  const queryReq = query?.join(",");

  const supabase = await createClient();

  const { data: articles } = await supabase
    .from("Developers articles")
    .select<string, Pick<RowData, ArticleKeys>>(queryReq || "*");

  return (
    <ul className={styles.allArticlesList}>
      {articles?.map((post) => (
        <li key={post.id}>
          <Link href={`/${post.slug}`} className="text-preset-5">
            {post.title}
          </Link>
          <span className="text-preset-8-italic">
            {getLocalDate(post.publishedAt!)}
          </span>
          {post?.description ? <p className="text-preset-7">{post.description}</p> : <></>}
        </li>
      ))}
    </ul>
  );
};
