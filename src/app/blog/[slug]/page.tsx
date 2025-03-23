import { createClient } from "@/utils/supabase/server";

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

  console.log(article);

  return (
    <article>
      <h1> {article?.title}</h1>
    </article>
  );
}
