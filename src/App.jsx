import './App.css'
import Home from "./components/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs.jsx";

function App() {

  return (
    <>
        <Home />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<AboutUs />}/>
        </Routes>
    </>
  )
}

export default App
