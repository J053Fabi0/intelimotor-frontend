import Checkout from "./PublishCar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Copyright from "./Copyright";

function App() {
  return (
    <>
      <CssBaseline />

      <AppBar
        elevation={0}
        color="default"
        position="absolute"
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Intelimotors - Prueba de Jose Fabio
          </Typography>
        </Toolbar>
      </AppBar>

      <Checkout />

      <Copyright />
    </>
  );
}

export default App;
