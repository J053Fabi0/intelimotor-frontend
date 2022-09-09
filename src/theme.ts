import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
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
