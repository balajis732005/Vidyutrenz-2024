import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import React from "react";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </>
  )
}

export default App
