import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"

export default function CodeSnippet() {
  const code = `
    function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
      const value: T = parseModel(chunk._response, chunk._value);
      const initializedChunk: InitializedChunk<T> = (chunk: any);
      initializedChunk._status = INITIALIZED;
      initializedChunk._value = value;
      return value;
    }
  `

  const customStyle = {
    'backgroundColor': '#011221',
    'border-radius': '1.5rem',
  };


  return (
    <div className="border border-default-border-color rounded-3xl">
      <SyntaxHighlighter language="typescript" style={nightOwl} customStyle={customStyle}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}