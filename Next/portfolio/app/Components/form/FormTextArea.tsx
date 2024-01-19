import { ChangeEvent } from "react";

type InputProps = {
  Label: string;
  Name: string;
  Value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextArea(props: InputProps) {
  return (
    <div className="flex flex-col px-2 py-2 max-w-sm font-mono w-full">
      <label className="text-default-text-color pb-2">{props.Label}:</label>
      <textarea 
        value={props.Value} 
        onChange={props.onChange} 
        maxLength={350}
        className="text-default-text-color h-[9rem] px-2 bg-[#011121] border border-default-border-color rounded-lg focus:border-2"
      />
    </ div>
  )
}