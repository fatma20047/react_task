import Contact from "./components/ContactMe/Contact"
import Navbar from "./components/Navbar/Navbar";
import About from"./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App(){
  
  return (<>

    <Navbar/>
    <Routes>
      <Route path="/Portfolio" element={<Portfolio/>} ></Route>
      <Route path="/About" element={<About/>} ></Route>
      <Route path="/Contact" element={<Contact/>} ></Route>
    </Routes>
    <Footer/>
  </>)
}


export default App;
