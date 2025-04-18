import Link from "next/link";
import styles from "./ArticlesList.module.css";
import { getLocalDate } from "./helpers";
import { getDataViaSupabase } from "@/utils/supabase/helper";
import type { ArticlesListProps } from "@/utils/supabase/types";
import { createClient } from "@/utils/supabase/client";

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: articles } = await supabase
    .from("Developers articles")
    .select("slug");
    
  return articles?.map((article) => ({
    slug: article.slug,
  })) || [];
}


const ArticlesList = async ({ query }: ArticlesListProps) => {
  const { data: articles } = query?.includes("description")
    ? await (
        await getDataViaSupabase(query)
      ).supabase
    : await (await getDataViaSupabase(query)).supabase.order("publishedAt", { ascending: false });

  if (!articles) return <p>You do not have any post</p>;

  return (
    <ul className={styles.allArticlesList}>
      {articles?.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`} className="text-preset-5">
            {post.title}
          </Link>
          <span className="text-preset-8-italic">{getLocalDate(post.publishedAt!)}</span>
          {post?.description ? <p className="text-preset-7">{post.description}</p> : <></>}
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
