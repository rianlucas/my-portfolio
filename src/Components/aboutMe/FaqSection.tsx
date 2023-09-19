type ContainerProps = {
  children: React.ReactNode;
  name: string;
};

// border-b border-default-border-color

export default function FaqSection(props: ContainerProps) {
  return (
    <div className='text-default-text-color border-t border-default-border-color pb-5'>
      <details>
        <summary className='mb-4 pl-5 pr-[5.75rem] py-4 border-b border-default-border-color border-l-0 border-t-0 text-white transition-all cursor-default'>
          <span className='pr-2'>{ props.name }</span>
        </summary>

        { props.children }
        
      </details>
    </div>
  )
  
}