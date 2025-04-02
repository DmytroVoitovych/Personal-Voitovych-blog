import { MDXRemoteProps } from "next-mdx-remote/rsc";
import { NotsLogo } from "./ConditionalLogoNotes";
import { CodeBlock, dracula, PrismLanguage } from "@react-email/code-block";

type MDXComponents = MDXRemoteProps["components"];

const textPresets = {
  preset1: {
    fontWeight: 800,
    fontSize: "40px",
    lineHeight: 1.3,
    letterSpacing: "-1px",
    color: "#34302D",
  },
  preset2: {
    fontWeight: 800,
    fontSize: "32px",
    lineHeight: 1.3,
    letterSpacing: "-0.5px",
  },
  preset3: {
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: 1.3,
    letterSpacing: "-0.5px",
    color: "#34302D",
  },
  preset4: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: 1.3,
    letterSpacing: "-0.5px",
  },
  preset5: {
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: 1.3,
    letterSpacing: "-0.5px",
  },
  preset6: {
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: 1.5,
    letterSpacing: "-0.5px",
  },
  preset7: {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: 1.5,
    letterSpacing: "-0.2px",
    color: "#4a4846",
  },
  preset7Semibold: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: 1.5,
    letterSpacing: "-0.2px",
  },
  preset8: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: 1.3,
    letterSpacing: "-0.2px",
  },
  preset8Italic: {
    fontWeight: 400,
    fontStyle: "italic",
    fontSize: "16px",
    lineHeight: 1.3,
    letterSpacing: "-0.2px",
  },
  dyUl: {
    display: "grid",
    gap: "12px",
    listStyle: "unset",
    marginLeft: "16px",
    color: "#4a4846",
  },
  dyA: {
    textDecoration: "underline",
    textDecorationColor: "#93CEFC",
    textDecorationSkipInk: "none" as const,
    textDecorationThickness: "8px",
    textUnderlineOffset: "-1px",
    marginBottom: "24px",
    textTransform: "capitalize" as const,
  },
  divider: {
    border: "none",
    height: "1px",
    backgroundColor: "#EFEDEB",
  },
};

const components: MDXComponents = {
  h1: (props) => <h1 {...props} style={textPresets.preset1} />,
  h2: (props) => <h2 {...props} style={textPresets.preset3} />,
  h3: (props) => <h3 {...props} style={textPresets.preset3} />,
  p: (props) => <p {...props} style={textPresets.preset7} />,
  ul: (props) => <ul {...props} style={textPresets.dyUl} />,
  ol: (props) => <ol {...props} style={{ ...textPresets.dyUl, listStyle: "decimal" }} />,
  li: (props) => <li {...props} />,
  blockquote: (props) => <blockquote {...props} style={textPresets.preset7} />,
  strong: ({ children }) => {
    const transformStr = (str: string) => str.replace(":", "").toLowerCase();
    const regex = /(Tip:|Warning:|Information:)/;
    const result = regex.exec(children?.toString() || "");
    const createClass = result
      ? { ...textPresets.preset5, color: "#4a4846" }
      : { ...textPresets.preset7Semibold, color: "#4a4846" };
    const cl = result ? transformStr(result[0]) : "";

    return (
      <>
        <NotsLogo cl={cl} /> <strong style={createClass}>{children}</strong>
      </>
    );
  },
  em: (props) => <em {...props} style={{ fontWeight: "600" }} />,
  a: (props) => <a {...props} style={{ ...textPresets.preset7, ...textPresets.dyA }} />,
  code: ({ className, children }) => {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <CodeBlock
        code={String(children).trim()}
        lineNumbers
        theme={dracula}
        language={match[1] as PrismLanguage}
      />
    ) : (
      <code className="dy-inline-code" style={{ color: "#1975FB" }}>
        {children}
      </code>
    );
  },
  pre: (props) => <pre {...props} className="dy-pre" />,
  table: (props) => <table {...props} className="dy-table " />,
  th: (props) => <th {...props} style={textPresets.preset6} />,
  td: (props) => <td {...props} style={textPresets.preset8} />,
  hr: () => <hr style={textPresets.divider} />,
};

export default components;
