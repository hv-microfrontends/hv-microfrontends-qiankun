import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    "& > div": {
      marginTop: 40,
      height: "calc(100vh - 40px)",
    },
  },
}));

export default styles;
