import Link from "next/link";

interface headerLinksProps {
  name: string;
  href: string;
}

export default function HeaderLinks (props: headerLinksProps) {
  return (
    <Link 
      href={props.href} 
      className="z-10 px-8 py-4 border-b-2 border-b-[#061726] text-[#3b454e] border-solid border-r border-[#1d2b39] last:border-l last:border-r-0 hover:text-white hover:border-b-[#FEA55F] hover:border-b-2 active:border-b-[#FEA55F] transition duration-150 ease-in-out">
      {props.name}
    </Link>
  )
}