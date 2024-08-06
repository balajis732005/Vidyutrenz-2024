// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'; // Adjust the import path as needed
import Events from './components/Events/Events.jsx';
import Home from './components/Home/Home.jsx'; // Assuming you have a Home component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
