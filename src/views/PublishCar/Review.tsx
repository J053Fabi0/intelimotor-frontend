import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

export default function Review({ data }: { data: [string, any][] }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Confirma la información
      </Typography>
      <List disablePadding>
        {data.map(([key, value]) => (
          <ListItem key={key} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={key} />
            <Typography variant="body2">{value}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
}
