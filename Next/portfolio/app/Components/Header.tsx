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
       <HeaderLinks
         href="/"
         name="rian_lucas"
         activeLink={activeLink}
         onClick={handleLinkClick}
         style="pr-[12rem]"
       />

       <div className="flex ">
         <HeaderLinks href="/aboutMe" name="_about-me" activeLink={activeLink} onClick={handleLinkClick} />
         <HeaderLinks href="/projects" name="_projects" activeLink={activeLink} onClick={handleLinkClick} />
         <HeaderLinks href="/articles" name="_articles" activeLink={activeLink} onClick={handleLinkClick} />
       </div>
     </div>
     <HeaderLinks href="/contactMe" name="_contact-me" activeLink={activeLink} onClick={handleLinkClick} />
   </div>
 );
}
