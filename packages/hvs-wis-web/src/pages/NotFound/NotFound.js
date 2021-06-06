import React from "react";
import { HvGrid, HvTypography } from "@hv/uikit-react-core";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";

const NotFound = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <HvGrid container>
      <HvGrid item xl={12}>
        <HvTypography variant="mTitle">
          {t("pages.notFound.title")}
        </HvTypography>
      </HvGrid>
    </HvGrid>
  );
};

export default NotFound;
