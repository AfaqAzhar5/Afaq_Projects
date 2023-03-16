import React, { useState } from "react";
import NavBar from "./Home/NavBar";
import SideBar from "./Home/SideBar/SideBar";
import Menu from "./Home/SideBar/Menu/Menu";
import Contact from "./Home/SideBar/Menu/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Home/Dashboard/Dashboard";
import "./App.css";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');
</style>;

const api_key = "AIzaSyDyueKazZ8fND2pEHaPsJGF2mMlvRYnnkI";

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="app">
      <NavBar menu={menu} propMenu={setMenu} />
      <div className="app_container">
        <>{menu ? <SideBar /> : <Menu />}</>
        <div className="app_content">
          <h1>AFaq Azhar</h1>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
