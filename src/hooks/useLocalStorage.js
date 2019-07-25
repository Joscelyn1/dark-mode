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
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  export const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValue];
};
