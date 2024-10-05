import React, { useState,createContext } from "react";
import Toolbar from "./Toolbar";
export const ThemeContext = createContext();


const UseContextHook = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Toolbar />
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default UseContextHook;
