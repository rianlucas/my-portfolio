import Home from "./Pages/Home";
import AboutMeLayout from "./Layouts/AboutMeLayout";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import AboutMe from "./Pages/About-me";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/aboutMe" element={<AboutMeLayout />} >
          <Route path="/aboutMe/PersonalInfo" element={<AboutMe/>}/>
        </Route>

      </Route>
    </Routes>
  )
}