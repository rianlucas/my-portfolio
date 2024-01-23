import Image from "next/image"

interface ProjectOptionsFilterProps {
  name: string
  icon: string
}

export default function ProjectOptionsFilter (props: ProjectOptionsFilterProps) {
  return (
      <div className="mx-5 my-2 flex">
        <input type="checkbox" />
        <Image className='mx-2' src={props.icon} width={16} height={16} alt='teste'  />
        <p> {props.name} </p>
      </div>
  )
}