
import About from "./components/About";
import Contact from "./components/Contect";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";

function App() {

  function getValue(val){
    // console.log(val)
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home getValue={getValue}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;