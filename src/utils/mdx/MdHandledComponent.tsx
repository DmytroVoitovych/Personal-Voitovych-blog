import { MDXRemote} from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import "prismjs/themes/prism-tomorrow.css";
import components from "./customComponentsList";


export function MdHandledComponent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={{ ...components}}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
