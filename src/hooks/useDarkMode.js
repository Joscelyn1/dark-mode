import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode");
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      //console.log("dark mode is false");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
