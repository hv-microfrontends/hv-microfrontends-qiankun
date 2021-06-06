import { makeStyles } from "@material-ui/core";

const HEADER_HEIGHT = 44;

const useStyles = makeStyles(theme => ({
  section: {
    display: "flex",
  },
  container: {
    marginTop: `calc(${HEADER_HEIGHT}px + ${theme.hv.spacing.lg}px)`,
  },
}));

export default useStyles;
