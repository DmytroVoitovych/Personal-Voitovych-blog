import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { MDXRemoteProps } from "next-mdx-remote/rsc";
import { NotsLogo } from "./ConditionalLogoNotes";

type MDXComponents = MDXRemoteProps["components"];

const components: MDXComponents = {
  h1: (props) => <h1 {...props} className="text-preset-1" />,
  h2: (props) => <h2 {...props} className="text-preset-3 dy-h2-h3" />,
  h3: (props) => <h3 {...props} className="text-preset-3 dy-h2-h3" />,
  p: (props) => <p {...props} className="text-preset-7 dy-p" />,
  ul: (props) => <ul {...props} className="dy-ul" />,
  ol: (props) => <ol {...props} className="dy-ol" />,
  li: (props) => <li {...props} />,
  blockquote: (props) => <blockquote {...props} className="text-preset-7 dy-q" />,
  strong: ({children}) =>{
    const transformStr = (str:string)=>   str.replace(':','').toLowerCase();
    const regex = /(Tip:|Warning:|Information:)/;
    const result = regex.exec(children);
    const createClass = result ? `${transformStr(result[0])} text-preset-5` : 'text-preset-7-semibold';
    const cl = result ? transformStr(result[0]): '';
   
    return <><NotsLogo cl={cl}/>  <strong className={` ${createClass}`}  >{children}</strong></>},
  em: (props) => <em {...props} className="dy-em" />,
  a: (props) => <a {...props} />,
  code: ({ className, children }) => {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter
        className={"dy-block"}
        useInlineStyles={false}
        style={dracula}
        language={match[1]}
        PreTag="div"
      >
        {String(children).trim()}
      </SyntaxHighlighter>
    ) : (
      <code className="dy-inline-code">{children}</code>
    );
  },
  pre: (props) => <pre {...props} className="dy-pre" />,
  table: (props) => <table {...props} className="dy-table " />,
  th: (props) => <th {...props} className="text-preset-6 dy-th" />,
  td: (props) => <td {...props} className="text-preset-8 dy-td" />,
  hr: () => <hr className="divider" />,
};


export default components;