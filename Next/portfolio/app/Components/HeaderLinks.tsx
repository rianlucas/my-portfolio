'use client';
import Link from "next/link";

interface headerLinksProps {
 name: string;
 href: string;
 activeLink: string;
 onClick: (href: string) => void;
}

export default function HeaderLinks(props: headerLinksProps) {
 const isActive = props.activeLink === props.href;

 return (
   <Link
     onClick={() => props.onClick(props.href)}
     href={props.href}
     className={`whitespace-nowrap z-10 px-8 py-4 border-b-2 border-b-[#061726] text-[#3b454e] border-solid border-r border-[#1d2b39] last:border-l last:border-r-0 hover:text-white hover:border-b-[#FEA55F] hover:border-b-2 transition duration-150 ease-in-out ${isActive ? "text-white border-b-[#FEA55F] border-b-2" : ""}`}
   >
     {props.name}
   </Link>
 );
}
