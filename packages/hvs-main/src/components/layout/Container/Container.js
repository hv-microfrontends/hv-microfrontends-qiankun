import React, { useEffect, useContext } from "react";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import Header from "components/layout/Header";
import useStyles from "./styles";

const Container = ({ setGlobalState, onGlobalStateChange }) => {
  const classes = useStyles();
  const { theme, setTheme } = useContext(ThemeContext);
  const { isOpen, setIsOpen } = useContext(NavigationContext);

  useEffect(() => {
    onGlobalStateChange?.((state, prevState) => {
      if (state.theme !== prevState.theme) setTheme(state.theme);
      if (state.isOpen !== prevState.isOpen) setIsOpen(state.isOpen);
    });
  }, [onGlobalStateChange, setTheme, setIsOpen]);

  useEffect(() => {
    setGlobalState?.({ theme, isOpen });
  }, [setGlobalState, theme, isOpen]);

  return (
    <div className={classes.section}>
      <Header />
    </div>
  );
};

export default Container;
