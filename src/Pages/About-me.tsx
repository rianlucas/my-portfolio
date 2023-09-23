import SideBarAboutMe  from "../Components/aboutMe/SidebarAboutMe"
import DescribeLine from "../Components/aboutMe/DescribeLine"

export default function AboutMe() {
  return (
    <div className="flex">
      <SideBarAboutMe />
      
      <div className=" grow grid grid-cols-2 ">

        <div className="text-default-text-color border border-default-border-color py-12">
          <div className="max-w-lg">
            <DescribeLine line={1} text="/**"/>
            <DescribeLine line={2} text="* About me"/>
            <DescribeLine line={3} text="* lorem ipsm dolar emet "/>
            <DescribeLine line={4} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={5} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={6} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={7} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={8} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={9} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={10} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={11} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={12} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={13} text="* lorem ipsm dolar emet"/>
            <DescribeLine line={14} text="*/"/>
          </div>
        </div>
        
        <div className="">
          <p>teste</p>
        </div>

      </div>

    </div>
  )
}