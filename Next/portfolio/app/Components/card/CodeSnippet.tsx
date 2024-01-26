import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { dracula, nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface CodeSnippetProps {
  code: string;
}

export default function CodeSnippet(props: CodeSnippetProps) {
  const customStyle = {
    'backgroundColor': '#011221',
    'borderRadius': '1.5rem',
    'word-wrap': 'normal'
    };


  return (
    <div className="border border-default-border-color rounded-3xl xl:max-w-md 2xl:max-w-3xl">
      <SyntaxHighlighter showLineNumbers wrapLines language="typescript" style={nightOwl} customStyle={customStyle}>
        {props.code}
      </SyntaxHighlighter>
    </div>
  )
}