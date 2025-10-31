import Contact from "./components/ContactMe/Contact"
import Navbar from "./components/Navbar/Navbar";
import About from"./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

function App(){
  
  return <div>
    <Navbar/>
    <Portfolio/>
    <About/>
    <Contact/>
  </div>
}


export default App;
