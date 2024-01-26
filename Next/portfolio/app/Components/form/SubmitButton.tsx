import Link from "next/link";

interface SubmitButtonProps {
  buttonName: string;
  link: string;
  target?: string;
}

export default function SubmitButton (props: SubmitButtonProps) {
  return (
    <div>
      <Link href={props.link} target="" type="submit" className="py-2 px-3 self-start bg-[#1C2B3A] rounded-lg font-mono text-sm">
        {props.buttonName}
      </Link>
    </div>
  )
}