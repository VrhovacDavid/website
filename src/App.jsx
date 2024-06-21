import { Route, Routes } from "react-router-dom"
import Home from "./components/Pages/Home"
import Datenschutz from "/src/components/Legal/Datenschutz"
import Impressum from "/src/components/Legal/Impressum"
import AGB from "./components/Legal/AGB"
import  Portfolio  from "./components/Pages/Portfolio"
import Links from "./components/Pages/Links"
import Process from "./components/Pages/Process"
import CameraGear from "./components/Pages/CameraGear"
import Services from "./components/Pages/Services"
import Kontakt from "./components/Pages/Kontakt"
import NoPage from "./components/Pages/404"
import Nike from "./components/Portfolio/Nike"
import CookieConsent from "./components/Legal/CookieConsent"
import Keypad from "./components/Portfolio/Keypad"



import Blog from "./Blog/Blog"
import DesignTools from "./Blog/DesignTools"
import LogoErstellenLassen from "./Blog/LogoErstellenLassen"


const App = () => {
  return (

  

   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/cookieconsent' element={<CookieConsent/>}/>
    <Route path='/datenschutz' element={<Datenschutz/>}/>
    <Route path='/impressum' element={<Impressum/>}/>
    <Route path='/agb' element={<AGB/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/links' element={<Links/>}/>
    <Route path='/Process' element={<Process/>}/>
    <Route path='/cameragear' element={<CameraGear/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/kontakt' element={<Kontakt/>}/>
    <Route path='/nike' element={<Nike/>}/>
    <Route path='/keypad' element={<Keypad/>}/>
    <Route path='*' element={<NoPage/>}/>




    <Route path='/blog' element={<Blog/>}/>

    <Route path='/beste-kostenlose-grafikprogramme' element={<DesignTools/>}/>
    <Route path='/logo-erstellen-lassen' element={<LogoErstellenLassen/>}/>




   


   </Routes>


  )
}

export default App