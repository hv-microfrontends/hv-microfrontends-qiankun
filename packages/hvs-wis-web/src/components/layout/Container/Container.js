import React, { useEffect, useContext } from "react";
import { HvContainer } from "@hv/uikit-react-core";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import Header from "components/layout/Header";
import VerticalNavigation from "components/layout/VerticalNavigation";
import Routes from "lib/routes";
import useStyles from "./styles";

const Container = ({ container, setGlobalState, onGlobalStateChange }) => {
  const isEmbedded = !!container;
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
      {!isEmbedded && <Header />}
      <VerticalNavigation />
      <HvContainer maxWidth="xl" className={classes.container}>
        <Routes />
      </HvContainer>
    </div>
  );
};

export default Container;
