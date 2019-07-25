import React, { useState } from "react";

// export const useInput = (key, initialValue) => {
//   const [inputValue, setInputValue] = useLocalStorage(key, initialValue);
//   const handleChange = updatedvalue => {
//     setInputValue(updatedValue);
//   };
//   return [inputValue, handleChange];
// };

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    //save state
    setStoredValue(value);
    //save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};
