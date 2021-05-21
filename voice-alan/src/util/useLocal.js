import { useEffect, useState } from "react";

function getSavedValue(key, intialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {     //initalise value once
    return getSavedValue(key, intialValue);
  });

  useEffect(() => {
     localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue];
}
