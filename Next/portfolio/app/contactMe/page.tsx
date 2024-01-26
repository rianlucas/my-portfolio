'use client';

import FormInput from "../Components/form/FormInput"
import FormTextArea from "../Components/form/FormTextArea"
import CodeSnippet from "../Components/card/CodeSnippet"
import { useState } from "react";

export default function Section() {

  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmaileValue, setInputEmailValue] = useState('');
  const [inputDescriptionValue, setInputDescriptionValue] = useState('');

  const code = `
  const button = document.querySelector('#sendBtn');

  const message = {
    name: "${inputNameValue}",
    email: "${inputEmaileValue}",
    message: "${inputDescriptionValue}",
    date: "${new Date().toDateString()}"
  }

  button.addEventListener('click', () => {
    form.send(message);
  })
  `
  return (
    <div className="grid grid-cols-2 h-full">

      <div className="py-3 border-r border-default-border-color flex items-center justify-center w-full">
          <div className="flex flex-col justify-center items-center w-full max-w-sm">

            <div className="flex flex-col px-2 py-2 font-mono max-w-sm w-full">
              <FormInput 
                Label="_name" 
                Name="name"
                Value={inputNameValue}
                onChange={e => setInputNameValue(e.target.value)}
              />

              <FormInput 
                Label="_email" 
                Name="email"
                Value={inputEmaileValue}
                onChange={e => setInputEmailValue(e.target.value)}
              />

              <FormTextArea 
                Label="_message" 
                Name="message"
                Value={inputDescriptionValue}
                onChange={e => setInputDescriptionValue(e.target.value)}
              />
            </div>

            <div className="py-5 px-2 self-start">
              <button type="submit" className="py-2 px-3 self-start bg-[#1C2B3A] rounded-lg font-mono text-sm">submit-message</button>
            </div>
          </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex text-default-text-color">  
          <CodeSnippet code={code}/>
        </div>
      </div>

    </div>
  )
}