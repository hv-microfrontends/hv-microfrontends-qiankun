import React from "react";
import { HvProvider } from "@hv/uikit-react-core";
import useTheme from "lib/hooks/useTheme";

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <HvProvider uiKitTheme={theme}>{children}</HvProvider>
    </ThemeContext.Provider>
  );
};
