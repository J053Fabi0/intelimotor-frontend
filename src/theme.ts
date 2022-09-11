import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: "#d50000",
    },
    secondary: {
      main: "#bf360c",
    },
  },
});
export default theme;
