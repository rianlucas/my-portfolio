import Image from "next/image"

interface ProjectOptionsFilterProps {
  name: string
  icon: string
}

export default function ProjectOptionsFilter (props: ProjectOptionsFilterProps) {
  return (
      <div className="mx-5 my-2 flex">
        <input id={props.name} type="checkbox" className="peer relative appearance-none shrink-0 w-4 h-4 border border-[#607B96] rounded-sm mt-1 bg-[default-bg-color] checked:bg-[#607B96] hover:border-sky-900"/>
        <Image className='mx-2' src={props.icon} width={16} height={16} alt='teste'  />
        <label htmlFor={props.name} className="font-fira-code text-[default-text-color]">
          {props.name} 
        </label>
      </div>
  )
}