import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import "prismjs/themes/prism-tomorrow.css";
import { MDXRemoteProps } from "next-mdx-remote";

type MDXComponents = MDXRemoteProps["components"];

export function MdHandledComponent({
  source,
  components,
}: {
  source: string;
  components: MDXComponents;
}) {
  return (
    <MDXRemote
      source={source}
      components={{ ...components }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
