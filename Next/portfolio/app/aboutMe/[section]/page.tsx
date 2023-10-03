import PersonalInfo from "@/app/Components/aboutMe/MdFiles/PersonalInfo";
import Card from "@/app/Components/card/Card";

interface SectionParams {
  params: {
    section: string;
  }
}


export default function section({ params }: SectionParams) {
  if (params.section === 'PersonalInfo'){
    return (
    <div className="grid grid-cols-2 h-full">
      <div className=" py-3 border-r border-default-border-color">
        { params.section === 'PersonalInfo' && <PersonalInfo />}
      </div>

      <div>
        <Card/>
      </div>
    </div>
    )
  }
}