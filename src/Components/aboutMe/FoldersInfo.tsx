import MarkDown  from '../../assets/icons/Markdown.png'

interface FaqSidebar {
  folder: string;
  summaryText: string;
  detailsDescription: string;
}

export default function FaqSidebar (props: FaqSidebar) {
  return (
    <div className='pl-4 py-[0.125rem] '>
      <details>
        <summary className='flex items-center'>
        <svg className="mr-3 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
          <i className='pr-2'>
            <img src={props.folder} alt="" />
          </i>
          <p className="hover:text-white transition-all cursor-pointer">{props.summaryText}</p> 
        </summary>

        <div className='flex items-center pl-7 py-1'>
          <i className='pr-2'>
            <img src={MarkDown} alt="" />
          </i>
          <p className="hover:text-gray-300 cursor-pointer transition-all">{props.detailsDescription}</p> 
        </div>
        
      </details>
    </div>
  )
}