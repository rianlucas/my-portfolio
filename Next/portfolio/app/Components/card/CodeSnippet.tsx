import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { dracula, nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"

interface CodeSnippetProps {
  code: string;
  backgroundColor?: string;
  showLineNumbers?: boolean;
}

export default function CodeSnippet(props: CodeSnippetProps) {
  const defaultBackgroudnColor = '#011627';

  return (
    <div className="rounded-3xl">
      <SyntaxHighlighter
       showLineNumbers={props.showLineNumbers} 
       wrapLines 
       language="typescript" 
       style={nightOwl} 
       customStyle={{'backgroundColor': props.backgroundColor || defaultBackgroudnColor, 'borderRadius': '1.5rem'}}>
        {props.code}
      </SyntaxHighlighter>
    </div>
  )
}