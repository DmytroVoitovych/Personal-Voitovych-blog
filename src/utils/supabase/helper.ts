import { Database } from "../../../database.types";
import { createClient } from "./server";

type ArticleKeys = keyof Database["public"]["Tables"]["Developers articles"]["Row"];
type RowData = Database["public"]["Tables"]["Developers articles"]["Row"];

export const getDataViaSupabase = async (query?: ArticleKeys[]) => {
  const queryReq = query?.join(",");
  const supabase = await createClient();

  return {
    supabase: supabase
      .from("Developers articles")
      .select<string, Pick<RowData, ArticleKeys>>(queryReq || "*"),
  };
};
