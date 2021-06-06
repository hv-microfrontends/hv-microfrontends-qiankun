import React from "react";
import useNavigation from "lib/hooks/useNavigation";

export const NavigationContext = React.createContext({});

export const NavigationProvider = ({ children, navigation }) => {
  const { activePath, isOpen, setIsOpen, toggleOpen } =
    useNavigation(navigation);

  return (
    <NavigationContext.Provider
      value={{ navigation, activePath, isOpen, setIsOpen, toggleOpen }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
