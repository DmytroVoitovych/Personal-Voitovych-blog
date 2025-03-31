"use server";
// export const dynamic = 'force-static';
import styles from "./page.module.css";
import { getLocalDate } from "@/components/allArticlesList/helpers";
import { MdHandledComponent } from "@/utils/mdx/MdHandledComponent";
import components from "@/utils/mdx/customComponentsList";
import { getDataViaSupabase } from "@/utils/supabase/helper";


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    console.log(params,'params debug');
  const { slug } = await params;
  const { data: article } = await (await getDataViaSupabase()).supabase
    .eq("slug", slug)
    .maybeSingle();

  return (
    <article className={styles.postContainer}>
      <h1 className="text-preset-1"> {article?.title}</h1>
      <span className="text-preset-8-italic">
        Published {article?.publishedAt ? getLocalDate(article.publishedAt!) : "no data"}
      </span>

      <section className={styles.sectionContent}>
        <MdHandledComponent source={article?.content || "no data"} components={components} />
      </section>
    </article>
  );
}
