import Image, { StaticImageData } from "next/image"
import SubmitButton from "../form/SubmitButton"

type ProjectCardProps = { 
  name: string,
  number: string,
  description: string,
  image: StaticImageData | string,
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className='xl:mx-4 2xl:mx-8'>
          
    <div className='py-3'>
      <p className='text-[#5565E8] font-semibold'>Project {props.number}  <span className='text-default-text-color font-normal'>\\ {props.name}</span> </p>
    </div>

    <div className='border border-default-border-color rounded-md'>
      <div>
        <Image alt='imagem' src={props.image} />
      </div>

      <div className='bg-[#011221]'>
        <p className='p-7 text-default-text-color text-lg'>{props.description}</p>
        <div className='pb-6 px-7'>
          <SubmitButton buttonName='view-project' />
        </div>
      </div>

    </div>


  </div>
  )
}