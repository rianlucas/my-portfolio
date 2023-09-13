import HobbiesIcon  from '../assets/icons/hobbies-icon.png'
import PersonalInfo  from '../assets/icons/personal-info-icon.png'
import ProfessionalInfo  from '../assets/icons/professional-info-icon.png'
import BioFolder  from '../assets/icons/Vector.png'
import EducationFolder  from '../assets/icons/EducationFolder.png'
import InterestsFolder  from '../assets/icons/InterestsFolder.png'
import FolderInfo from './aboutMe/FoldersInfo'

export default function SideBarAboutMe() {
  return (
    <div className='h-home flex font-mono'>
      <div className='px-4 first-line:h-home flex flex-col items-center max-w-[3.75rem] border-r  border-r-default-border-color'>
        <a href="#">
          <img className='py-4 ' src={ ProfessionalInfo  } alt="" />
        </a>

        <a href="#">
          <img className='py-4' src={ PersonalInfo } alt="" />
        </a>

        <a href="#">
          <img className='py-4' src={ HobbiesIcon } alt="" />
        </a>
      </div>

      <div className='border-r border-r-default-border-color'>

        <div className='text-white border-b border-default-border-color pb-5'>
          <details>
            <summary className='mb-4 pl-5 pr-[5.75rem] py-4 border-b border-default-border-color border-l-0 border-t-0'>
              <span className='pr-2'>personal-info</span>
            </summary>
            
            <FolderInfo folder={BioFolder} summaryText='bio' detailsDescription='personal-info'/>
            <FolderInfo folder={InterestsFolder} summaryText='interests' detailsDescription='technology'/>
            <FolderInfo folder={EducationFolder} summaryText='education' detailsDescription='university'/>

          </details>
        </div>
        
      </div>

    </div>
    
  )
}