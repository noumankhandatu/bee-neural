import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "light" | "dark";
}

// Retrieve theme from localStorage or default to light mode
const getInitialThemeState = (): ThemeState => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? { mode: savedTheme as "light" | "dark" }
      : { mode: "light" };
  }
  // Return default mode for SSR
  return { mode: "light" };
};

const initialThemeState: ThemeState = getInitialThemeState();

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    toggleTheme: (state) => {
      const newMode = state.mode === "light" ? "dark" : "light";
      state.mode = newMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newMode); // Save new mode to localStorage
        window.location.reload();
      }
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload); // Save specified mode to localStorage
        window.location.reload();
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
