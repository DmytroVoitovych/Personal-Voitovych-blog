import { Database } from "../../../database.types";

type ArticleKeys = keyof Database["public"]["Tables"]["Developers articles"]["Row"];

interface ArticlesListProps {
  query?: ArticleKeys[];
}

export { type ArticlesListProps };
