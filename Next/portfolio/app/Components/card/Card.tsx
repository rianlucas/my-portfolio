import CardHeader from "./CardHeader"
import CodeSnippet from "./CodeSnippet"

export default function Card() {
  return (
    <div className="p-3 text-default-text-color ">
      <p>{`//`} Code snippet showcase</p>
      <CardHeader />
      <div className="border border-default-border-color rounded-2xl xl:max-w-lg 2xl:max-w-3xl">
        <CodeSnippet 
          backgroundColor="#011221" 
          code="echo 'Hello World!'"
          showLineNumbers={false}
        />
      </div>
    </div>
  )
}