import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
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
          Intelimotor - Prueba de Jose Fabio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
