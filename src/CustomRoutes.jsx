import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";

const CustomRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default CustomRoutes;