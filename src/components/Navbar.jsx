import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode.js";
const Navbar = () => {
  const [dark, setDark] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDark(!dark);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={dark ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
