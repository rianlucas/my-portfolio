import HobbiesIcon  from '../assets/icons/hobbies-icon.png'
import PersonalInfo  from '../assets/icons/personal-info-icon.png'
import ProfessionalInfo  from '../assets/icons/professional-info-icon.png'

export default function SideBarAboutMe() {
  return (
    <div className='h-home flex'>
      <div className='px-4 first-line:h-home flex flex-col items-center max-w-[3.75rem] border-r-2  border-r-[#1d2b39]'>
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

      <div>
        <h1>
          <h1>Next Sidebar</h1>
        </h1>
      </div>

    </div>
    
  )
}