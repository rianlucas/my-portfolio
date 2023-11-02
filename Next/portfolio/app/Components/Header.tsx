'use client';
import HeaderLinks from "./HeaderLinks";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
 const [activeLink, setActiveLink] = useState("");

 const handleLinkClick = (href: string) => {
   setActiveLink(href);
 };

 return (
   <div className="flex justify-between max-w-full bg-[#061726] rounded-lg border-solid border-b border-[#1d2b39] text-base font-mono ">
     <div className="flex box-border">
       <Link
         href="/"
         className="px-8 pr-[12rem] py-4 text-[#3b454e] border-solid border-r border-[#1d2b39] hover:text-white hover:border-b-[#FEA55F] hover:border-b-2 transition duration-150 ease-in-out"
       >
         rian-lucas
       </Link>

       <div className="flex ">
         <HeaderLinks href="/aboutMe" name="_about-me" activeLink={activeLink} onClick={handleLinkClick} />
         <HeaderLinks href="/projects" name="_projects" activeLink={activeLink} onClick={handleLinkClick} />
         <HeaderLinks href="/articles" name="_articles" activeLink={activeLink} onClick={handleLinkClick} />
       </div>
     </div>
     <HeaderLinks href="#" name="_contact-me" activeLink={activeLink} onClick={handleLinkClick} />
   </div>
 );
}
