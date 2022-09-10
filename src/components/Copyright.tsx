import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" mb={2}>
      {"Copyright © "}
      <Link color="inherit" href="https://josefabio.com" target="blank">
        Jose Fabio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
