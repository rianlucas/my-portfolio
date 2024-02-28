import CodeSnippet from "../../card/CodeSnippet";

export type DescriptionFilesProps = {
  code: string;
};

export default function DescriptionFiles(props: DescriptionFilesProps) {
  return (
    <div className="text-default-text-color ml-5">
      <CodeSnippet
        code={props.code}
        showLineNumbers
        backgroundColor="#011627"
      />
    </div>
  );
}
