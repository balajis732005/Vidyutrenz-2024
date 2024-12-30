import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import React from "react";
import Events from "./components/Events/Events.jsx";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
          </Routes>
      </>
  )
}

export default App
