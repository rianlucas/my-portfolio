import CardHeader from "./CardHeader";
import CodeSnippet from "./CodeSnippet";

export default function Card() {
  return (
    <div className="text-default-text-color p-3 ">
      <p>{`//`} Code snippet showcase</p>
      <CardHeader />
      <div className="border-default-border-color rounded-2xl border xl:max-w-lg 2xl:max-w-full">
        <CodeSnippet
          backgroundColor="#011221"
          code="echo 'Hello World!'"
          showLineNumbers={false}
        />
      </div>
    </div>
  );
}
