import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {
  HvVerticalNavigation,
  HvVerticalNavigationTree,
  HvVerticalNavigationActions,
  HvVerticalNavigationAction,
} from "@hv/uikit-react-core";
import { User, ThemeSwitcher } from "@hv/uikit-react-icons";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import useStyles from "./styles";

const VerticalNavigation = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const { toggleTheme } = useContext(ThemeContext);
  const { navigation, activePath, isOpen, toggleOpen } =
    useContext(NavigationContext);

  const handleChange = (event, selection) => {
    if (selection.path) history.push(selection.path);
  };

  return (
    <div className={classes.root}>
      <HvVerticalNavigation
        isOpen={isOpen}
        toggleOpenCallback={toggleOpen}
        isCollapsable={isMdUp}
        toggleOpenCallback={toggleOpen}
        position={isMdUp ? "static" : "absolute"}
      >
        <HvVerticalNavigationTree
          data={navigation}
          selected={activePath?.id}
          onClick={handleChange}
        />
        {!isMdUp && (
          <HvVerticalNavigationActions>
            <HvVerticalNavigationAction
              label="Toggle Theme"
              icon={<ThemeSwitcher />}
              onClick={() => toggleTheme()}
            />
            <HvVerticalNavigationAction
              label="Profile"
              icon={<User />}
              onClick={() => {}}
            />
          </HvVerticalNavigationActions>
        )}
      </HvVerticalNavigation>
    </div>
  );
};

export default VerticalNavigation;
