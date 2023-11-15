import VerticalNav from "./VerticalNav"
type SideBarProps = {
  children: React.ReactNode;
  isPageAboutMe?: boolean;
}

export default function SideBarAboutMe(props: SideBarProps) {
  return (
    <div className='h-home flex font-mono'>

      {props.isPageAboutMe && <VerticalNav/>}

      <div className={`border-r border-r-default-border-color  ${props.isPageAboutMe ? 'w-[16.875rem]' : 'w-[20.25rem]'} `}>

      {props.children}
        
      </div>

    </div>
    
  )
}