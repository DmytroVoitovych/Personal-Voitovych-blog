import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export const ArticlesList = async () => {
  const supabase = await createClient();

  const { data: articles } = await supabase
    .from("Developers articles")
    .select("title,id,publishedAt");

  return (
    <ul>
      {articles?.map((post) => (
        <li key={post.id}>
            <Link href={`/${post.title}`} >{post.title}</Link>
            <span>{post.publishedAt}</span>
            </li>
      ))}
    </ul>
  );
};
