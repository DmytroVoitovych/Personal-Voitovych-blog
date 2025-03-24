import { MDXRemote } from "next-mdx-remote/rsc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const components = {  
    h1: (props) => <h1 {...props} className="text-preset-1" />,  
    h2: (props) => <h2 {...props}  className="text-preset-3 dy-h2-h3" />,  
    h3: (props) => <h3 {...props} className="text-preset-3 dy-h2-h3" />,  
    p: (props) => <p {...props} className="text-preset-7 dy-p" />,  
    ul: (props) => <ul {...props} className="dy-ul"/>,  
    ol: (props) => <ol {...props} className="dy-ol" />,  
    li: (props) => <li {...props} />,  
    blockquote: (props) => <blockquote {...props} className="text-preset-7 dy-q" />,  
    strong: (props) => <strong {...props} className="text-preset-7-semibold" />,  
    em: (props) => <em {...props} className="dy-em" />,  
    a: (props) => <a {...props} />,  
    code: ({ className, children }) => {
        const match = /language-(\w+)/.exec(className || "");
        return match ? (
          <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
            {String(children).trim()}
          </SyntaxHighlighter>
        ) : (
          <code>{children}</code>
        );
      },  
    pre: (props) => <pre {...props} />,  
    table: (props) => <table {...props} />,  
    th: (props) => <th {...props} />,  
    td: (props) => <td {...props} />,  
    hr: () => <hr className="divider" />,  
  }; 

  


export function MdHandledComponent(props) {

    
    return (
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    )
  };