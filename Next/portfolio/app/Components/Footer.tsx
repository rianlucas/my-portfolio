"use client";

import { useState } from "react";
import HeaderLinks from "./HeaderLinks";

export default function Footer() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <div className="flex justify-between border-t border-solid border-[#1d2b39] bg-[#061726] text-[#3b454e]">
      <HeaderLinks
        href="#"
        name="find me in:"
        activeLink={activeLink}
        onClick={handleLinkClick}
      />

      <HeaderLinks
        href="#"
        name="@rianlucas"
        activeLink={activeLink}
        onClick={handleLinkClick}
      />
    </div>
  );
}
