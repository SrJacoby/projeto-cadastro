import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Users from "../pages/Users";

const AppRoutes = ({themeToggler}) => {
   return(
        <Routes>
            <Route path="/" element={<Home themeToggler={themeToggler}/>} />
            <Route path="/users" element={<Users themeToggler={themeToggler}/>} />
        </Routes>
   )
}

export default AppRoutes;