import About from "./components/About"
import Contact from "./components/Contect";
import Navbar from "./components/navbar";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App