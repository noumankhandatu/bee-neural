// hooks/useTheme.ts

import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage for the theme only on the client-side
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme);
  }, []);

  // Function to set the theme and save it to localStorage
  const setStoredTheme = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    setTheme: setStoredTheme,
  };
};

export default useTheme;
