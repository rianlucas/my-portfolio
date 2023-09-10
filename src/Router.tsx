import Home from "./Pages/Home";
import AboutMe from "./Pages/About-me";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Route>
    </Routes>
  )
}