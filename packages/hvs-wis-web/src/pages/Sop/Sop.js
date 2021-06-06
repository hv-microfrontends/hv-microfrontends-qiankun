import React from "react";
import { HvGrid, HvTypography } from "@hv/uikit-react-core";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";

const Sop = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <HvGrid container>
      <HvGrid item xl={12}>
        <HvTypography variant="mTitle">
          {t("pages.management.sop.title")}
        </HvTypography>
      </HvGrid>
    </HvGrid>
  );
};

export default Sop;
