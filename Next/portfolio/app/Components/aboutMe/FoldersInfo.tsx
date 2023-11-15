import MarkDown  from '../../assets/icons/Markdown.png'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'


interface FaqSidebar {
  folder: StaticImageData;
  summaryText: string;
  detailsDescription: string;
}

export default function FaqSidebar (props: FaqSidebar) {
  return (
    <div className='pl-4 py-[0.125rem] '>
      <details>
        <summary className='flex items-center'>
          <i className='pr-2'>
            <Image src={props.folder} alt="" />
          </i>
          <p className="hover:text-white transition-all cursor-pointer">{props.summaryText}</p> 
        </summary>

        <div className='flex items-center pl-7 py-1'>
          <i className='pr-2'>
            <Image src={MarkDown} alt="" />
          </i>
          <Link href='/aboutMe/PersonalInfo' className="hover:text-gray-300 cursor-pointer transition-all">{props.detailsDescription}</Link> 
        </div>
        
      </details>
    </div>
  )
}