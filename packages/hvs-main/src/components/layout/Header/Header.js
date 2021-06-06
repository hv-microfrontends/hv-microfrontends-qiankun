import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {
  HvHeader,
  HvHeaderBrand,
  HvHeaderNavigation,
  HvHeaderActions,
  HvButton,
} from "@hv/uikit-react-core";
import { ThemeSwitcher, User, Menu } from "@hv/uikit-react-icons";
import { ThemeContext } from "lib/context/ThemeContext";
import { NavigationContext } from "lib/context/NavigationContext";
import HitachiLogo from "assets/HitachiLogo";
import useStyles from "./styles";

const Header = () => {
  const { REACT_APP_NAME } = process.env;
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleOpen, navigation, activePath } = useContext(NavigationContext);
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event, selection) => {
    if (selection.path) history.push(selection.path);
  };

  return (
    <HvHeader>
      {!isMdUp && (
        <div>
          <HvButton category="ghost" icon onClick={toggleOpen}>
            <Menu />
          </HvButton>
        </div>
      )}

      <HvHeaderBrand
        className={classes.brand}
        logo={<HitachiLogo style={{ width: 72, height: 20 }} />}
        name={REACT_APP_NAME}
      />

      {isMdUp && (
        <HvHeaderNavigation
          data={navigation}
          selected={activePath?.id}
          onClick={handleChange}
        />
      )}

      {isMdUp && (
        <HvHeaderActions>
          <HvButton
            icon
            aria-label="Change theme"
            onClick={() => toggleTheme()}
          >
            <ThemeSwitcher />
          </HvButton>
          <HvButton icon aria-label="Open User panel">
            <User />
          </HvButton>
        </HvHeaderActions>
      )}
    </HvHeader>
  );
};

export default Header;
