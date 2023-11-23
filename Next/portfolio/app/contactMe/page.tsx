import FormInput from "../Components/form/FormInput"
import FormTextArea from "../Components/form/FormTextArea"

export default function section() {
  return (
    <div className="grid grid-cols-2 h-full">

      <div className="py-3 border-r border-default-border-color flex items-center justify-center w-full">
          <div className="flex flex-col justify-center items-center w-full max-w-sm">
            <FormInput Label="_name" Name="name"/>
            <FormInput Label="_email" Name="email"/> 
            <FormTextArea Label="_message" Name="message"/>
            <div className="py-5 px-2 self-start">
              <button type="submit" className="py-2 px-3 self-start bg-[#1C2B3A] rounded-lg font-mono text-sm">submit-message</button>
            </div>
            {/* todo: create regex to remove characters from label, and put on html property name to get this value in backend*/}
        
          </div>
      </div>
        
      <div>
        teste
      </div>
    </div>
  )
}