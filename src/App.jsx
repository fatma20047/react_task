import Contact from "./components/ContactMe/Contact"
import Navbar from "./components/Navbar/Navbar";
import About from"./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App(){
  
  return <div>
    <Navbar/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
}


export default App;
