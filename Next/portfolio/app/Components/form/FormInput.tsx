import { ChangeEvent, useState } from "react";

type InputProps = {
  Label: string;
  Name: string;
  Value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput(props: InputProps) {

  return (
    <div className="flex flex-col px-2 py-2 font-mono max-w-sm w-full">
      <label className="text-default-text-color pb-2">{props.Label}:</label>
      <input value={props.Value} onChange={props.onChange} className="text-default-text-color py-[0.25rem] px-2 bg-[#011121] border border-default-border-color rounded-lg focus:border-2" type="text"/>
    </ div>
  )
}