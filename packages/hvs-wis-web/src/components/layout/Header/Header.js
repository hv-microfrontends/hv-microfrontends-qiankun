import React, { useContext } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {
  HvHeader,
  HvHeaderBrand,
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
  const { toggleOpen } = useContext(NavigationContext);
  const theme = useTheme();
  const classes = useStyles();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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
