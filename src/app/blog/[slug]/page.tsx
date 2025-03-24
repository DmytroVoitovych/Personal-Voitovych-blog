import { createClient } from "@/utils/supabase/server";
import styles from "./page.module.css";
import { getLocalDate } from "@/components/allArticlesList/helpers";
import { MdHandledComponent } from "@/utils/mdx/MdHandledComponent";



export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("Developers articles")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();


    
  return (
    <article className={styles.postContainer}>
      <h1 className="text-preset-1"> {article?.title}</h1>
      <span className="text-preset-8-italic">
        Published{" "}
        {article?.publishedAt ? getLocalDate(article.publishedAt!) : "no data"}
      </span>

      <section className={styles.sectionContent}>
        
        <MdHandledComponent source={article?.content || "no data"} />
      </section>
    </article>
  );
};


