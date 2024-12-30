import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import React from "react";
import Events from "./components/Events/Events.jsx";
import TechHead from "./components/TechHead/TechHead.jsx";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/tech_head" element={<TechHead />} />
          </Routes>
      </>
  )
}

export default App
