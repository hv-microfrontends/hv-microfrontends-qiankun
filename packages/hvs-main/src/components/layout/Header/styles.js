import { makeStyles } from "@material-ui/core";

const styles = makeStyles(theme => ({
  brand: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, 0)",
    },
  },
}));

export default styles;
