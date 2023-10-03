import Image from "next/image"

interface IconAndTextProps {
  icon: string;
  text: string;
}

export default function IconAndText(props: IconAndTextProps) {
  return (
    <div className="flex pr-5 hover:text-white transition-all">
      <Image className="h-4 mt-1 mr-2 " width={15} height={15} src={props.icon} alt="details"/>
      <span>{props.text}</span>
    </div>
  )
}