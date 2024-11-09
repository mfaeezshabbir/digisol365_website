"use client";
// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useReducer } from "react";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

type ThemeAction = { type: "TOGGLE_THEME" };

const initialState: ThemeState = {
  theme:
    (typeof window !== "undefined" && localStorage.getItem("theme")) === "dark"
      ? "dark"
      : "light",
};

const ThemeContext = createContext<{
  state: ThemeState;
  toggleTheme: () => void;
}>({
  state: initialState,
  toggleTheme: () => {},
});

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
    document.documentElement.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
