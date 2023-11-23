import CardHeader from "./CardHeader"
import CodeSnippet from "./CodeSnippet"

export default function Card() {
  return (
    <div className="p-3 text-default-text-color">
      <p>{`//`} Code snippet showcase</p>
      <CardHeader />
      <CodeSnippet />
    </div>
  )
}