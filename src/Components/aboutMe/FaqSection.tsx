type ContainerProps = {
  children: React.ReactNode;
  name: string;
};

// border-b border-default-border-color

export default function FaqSection(props: ContainerProps) {
  return (
    <div className='text-default-text-color border-t border-default-border-color'>
      <details className="border-b border-default-border-color align-middle pb-4 mt-4">
        <summary className='pl-5 pr-[5.75rem] border-l-0 border-t-0 text-white transition-all cursor-default'>
          <span className='pr-2'>{ props.name }</span>
        </summary>

        <div className="pt-2">
          { props.children }
        </div>
        
      </details>
    </div>
  )
  
}