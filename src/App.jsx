import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import React from "react";
import Events from "./components/Events/Events.jsx";
import TechHead from "./components/TechHead/TechHead.jsx";
import NonTechHead from "./components/NonTechHead/NonTechHead.jsx";
import WorkshopHead from "./components/WorkshopHead/WorkshopHead.jsx";
import WorkshopEvents from "./components/WorkshopEvents/WorkshopEvents.jsx";
import TechEvents from "./components/TechEvents/TechEvents.jsx";
import NonTechEvents from "./components/NonTechEvents/NonTechEvents.jsx";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/tech_head" element={<TechHead />} />
              <Route path="/nontech_head" element={<NonTechHead />} />
              <Route path="/workshop_head" element={<WorkshopHead />} />
              <Route path="/tech_events" element={<TechEvents />} />
              <Route path="/nontech_events" element={<NonTechEvents />} />
              <Route path="/workshop_events" element={<WorkshopEvents />} />
          </Routes>
      </>
  )
}

export default App
