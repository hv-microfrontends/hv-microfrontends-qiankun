import React from "react";
import { HvGrid, HvTypography } from "@hv/uikit-react-core";
import { useTranslation } from "react-i18next";
import Table from "components/common/Table";
import useStyles from "./styles";

const Incident = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <HvGrid container>
      <HvGrid item xs={12}>
        <HvTypography variant="mTitle">
          {t("pages.configuration.incident.title")}
        </HvTypography>
      </HvGrid>
      <HvGrid item xs={12}>
        <Table />
      </HvGrid>
    </HvGrid>
  );
};

export default Incident;
