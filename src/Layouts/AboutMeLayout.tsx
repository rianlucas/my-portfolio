import { Outlet } from "react-router-dom"
import SideBarAboutMe from "../Components/aboutMe/SidebarAboutMe"

export default function AboutMeLayout(){
  return (
    <div className="flex">
      <SideBarAboutMe/>
      <Outlet />
    </div>
  )
}