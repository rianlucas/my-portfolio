"use client";

import MarkDown from "../../assets/icons/Markdown.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface FaqSidebar {
  folder: StaticImageData;
  summaryText: string;
  detailsDescription: string;
}

export default function FaqSidebar(props: FaqSidebar) {
  const [isActive, SetIsActive] = useState(false);

  function handleActive() {
    SetIsActive(!isActive);
  }

  return (
    <div className="py-[0.125rem] pl-4 ">
      <details>
        <summary
          className="flex cursor-pointer items-center hover:text-white"
          onClick={handleActive}
        >
          <svg
            className={`mr-3 h-4 w-4 text-gray-500 transition-all  ${isActive ? "rotate-90 transform" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={"M9 5l7 7-7 7"}
            ></path>
          </svg>

          <i className="pr-2">
            <Image src={props.folder} alt="" />
          </i>
          <p className="transition-all ">{props.summaryText}</p>
        </summary>

        <div className="flex items-center py-1 pl-7">
          <i className="pr-2">
            <Image src={MarkDown} alt="" />
          </i>
          <Link
            href="/aboutMe/PersonalInfo"
            className="cursor-pointer transition-all hover:text-gray-300"
          >
            {props.detailsDescription}
          </Link>
        </div>
      </details>
    </div>
  );
}
