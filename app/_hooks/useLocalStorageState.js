import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        return initialState;
      }
    }
    return initialState; // Default value for SSR
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key);
        if (storedValue !== JSON.stringify(value)) {
          localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.error("Error writing to localStorage:", error);
      }
    }
  }, [value, key]);

  return [value, setValue];
}