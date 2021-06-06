import { useState, useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import { setCookie, getCookie } from "lib/utils/cookie";

const useTheme = () => {
  const initialTheme = getCookie("theme") === "wicked" ? "wicked" : "dawn";
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    setTheme(getCookie("theme") || (prefersDarkMode && "wicked") || "dawn");
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    const newTheme = theme === "dawn" ? "wicked" : "dawn";
    setTheme(newTheme);
    setCookie({ key: "theme", value: newTheme });
  };

  return { theme, setTheme, toggleTheme };
};

export default useTheme;
