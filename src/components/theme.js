import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: "initial"
      }
    }
  }
});

export default theme;
