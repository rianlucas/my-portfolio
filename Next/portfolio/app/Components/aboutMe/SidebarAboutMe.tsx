import HobbiesIcon  from '../../assets/icons/hobbies-icon.png'
import PersonalInfo  from '../../assets/icons/personal-info-icon.png'
import ProfessionalInfo  from '../../assets/icons/professional-info-icon.png'
import FaqSection from './FaqSection'
import BioFolder  from '../../assets/icons/Vector.png'
import EducationFolder  from '../../assets/icons/EducationFolder.png'
import InterestsFolder  from '../../assets/icons/InterestsFolder.png'
import FolderInfo from './FoldersInfo'
import PhoneIcon from '../../assets/icons/phone-icon.png'
import MailIcon from '../../assets/icons/mail-icon.png'
import Link from 'next/link'
import Image from 'next/image'

export default function SideBarAboutMe() {
  return (
    <div className='h-home flex font-mono'>
      <div className='px-4 first-line:h-home flex flex-col items-center max-w-[3.75rem] border-r  border-r-default-border-color'>
        <Link href="#">
          <Image className='py-4 ' src={ ProfessionalInfo  } alt="" />
        </Link>

        <Link href="#">
          <Image className='py-4' src={ PersonalInfo } alt="" />
        </Link>

        <Link href="#">
          <Image className='py-4' src={ HobbiesIcon } alt="" />
        </Link>
      </div>

      <div className='border-r border-r-default-border-color'>

        <FaqSection name='personal-info'>
          <FolderInfo folder={BioFolder} summaryText='bio' detailsDescription='personal-info'/>
          <FolderInfo folder={InterestsFolder} summaryText='interests' detailsDescription='technology'/>
          <FolderInfo folder={EducationFolder} summaryText='education' detailsDescription='university'/>
        </FaqSection>

        <FaqSection name='contacts'>
          <div className='flex px-4 items-center'>
            <Image alt="" src={MailIcon} className="w-4 h-4" />
            <p className='px-1'>rianlucas@hotmail.com</p>
          </div>

          <div className='flex px-4 py-1 items-center'>
            <Image alt="" src={PhoneIcon} className="w-4 h-4" />
            <p className='px-1'>+5583982146458</p>
          </div>
        </FaqSection>
        
      </div>

    </div>
    
  )
}