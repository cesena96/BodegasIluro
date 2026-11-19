import React from "react";

export const DEFAULT_THEME = "light";

export const getDesignPalette = (mode) => ({
    palette: {
        mode,
        ...(mode === DEFAULT_THEME
            ? {
                  primary: { main: "#6d1a36", dark: "#531329", contrastText: "#ffffff" },
                  secondary: { main: "#7b3b2a" },
                  background: { default: "#e6d5b8", paper: "#f1e6d0" },
                  text: { primary: "#2e211b", secondary: "#5b4838" },
                  custom: { tile: "#d3bd96", gold: "#b8863b", dark: "#4a3226", offer: "#7b3b2a", onGold: "#2e211b", onDark: "#f3eadb" },
              }
            : {
                  primary: { main: "#a3304f", dark: "#8a2742", contrastText: "#ffffff" },
                  secondary: { main: "#d9a441" },
                  background: { default: "#1e1511", paper: "#2b1f19" },
                  text: { primary: "#f3eadb", secondary: "#cdbfb5" },
                  custom: { tile: "#3a2b23", gold: "#d9a441", dark: "#0f0a08", offer: "#a3304f", onGold: "#1e1511", onDark: "#f3eadb" },
              }),
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        h1: { fontWeight: 800, letterSpacing: "-2px", lineHeight: 0.95 },
        h2: { fontWeight: 700 },
        button: { fontWeight: 600, textTransform: "none" },
    },
    shape: { borderRadius: 0 },
});

export const ThemeContext = React.createContext({
    theme: DEFAULT_THEME,
    toggleTheme: () => {},
});