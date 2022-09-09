import * as React from "react";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { NumericFormat } from "react-number-format";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth required variant="standard">
            <InputLabel htmlFor="input-name">Amount</InputLabel>
            <NumericFormat
              id="input-name"
              decimalScale={2}
              customInput={Input}
              thousandSeparator=","
              allowNegative={false}
              isAllowed={({ value }) => !isNaN(+value) || value.trim() === ""}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            variant="filled"
            name="description"
            label="Descripción"
            id="input-description"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
