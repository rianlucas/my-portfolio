import Link from "next/link";
import Image from "next/image";
import ProfessionalInfo  from '../../assets/icons/professional-info-icon.png'
import HobbiesIcon  from '../../assets/icons/hobbies-icon.png'
import PersonalInfo  from '../../assets/icons/personal-info-icon.png'

export default function VerticalNav() {
  return (
    <div className='w-[3.4rem] px-4 first-line:h-home flex flex-col items-center max-w-[3.75rem] border-r  border-r-default-border-color'>
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
  )
}