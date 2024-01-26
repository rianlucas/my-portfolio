import FaqSection from "../FaqSection"
import Image from "next/image"
import MailIcon from "../../../assets/icons/mail-icon.png"
import PhoneIcon from "../../../assets/icons/mail-icon.png"

export default function Contacts() {
  return (
    <FaqSection isOpen name='contacts'>
      <div className='flex px-4 items-center'>
        <Image alt="" src={MailIcon} className="w-4 h-4" />
        <p className='px-1'>rianlucas@hotmail.com</p>
      </div>

      <div className='flex px-4 py-1 items-center'>
        <Image alt="" src={PhoneIcon} className="w-4 h-4" />
        <p className='px-1'>+5583982146458</p>
      </div>
    </FaqSection>
  )
}