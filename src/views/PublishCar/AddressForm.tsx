import * as Yup from "yup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { NumericFormat } from "react-number-format";
import FormControl from "@mui/material/FormControl";
import { Formik, Form as FormikForm } from "formik";
import InputAdornment from "@mui/material/InputAdornment";
import PublishCarQuery from "../../types/PublishCarQuery";
import FormHelperText from "@mui/material/FormHelperText";

export default function AddressForm({
  initialValues,
  handleOnSubmit,
}: {
  initialValues: PublishCarQuery;
  handleOnSubmit: (values: PublishCarQuery) => void;
}) {
  const schema = Yup.object().shape({
    price: Yup.number().typeError("Ingresa un número.").min(0.01, "No puede ser gratuito.").required("Requerido."),
    description: Yup.string().required("Requerido."),
  });

  const hasError = (type: string, touched: any, errors: any, submitCount: number) =>
    (!!touched[type] || submitCount >= 1) && !!errors[type];

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ ...initialValues }}
      onSubmit={(values) => handleOnSubmit(values)}
    >
      {({ values, errors, touched, handleBlur, submitForm, submitCount, handleSubmit, handleChange }) => (
        <FormikForm onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Price */}
            <Grid item xs={12}>
              <FormControl
                required
                fullWidth
                variant="standard"
                error={hasError("price", touched, errors, submitCount)}
              >
                <InputLabel htmlFor="input-name">Precio</InputLabel>
                <NumericFormat
                  name="price"
                  id="input-name"
                  decimalScale={2}
                  onBlur={handleBlur}
                  customInput={Input}
                  value={values.price}
                  thousandSeparator=","
                  allowNegative={false}
                  isAllowed={({ value }) => !isNaN(+value) || value.trim() === ""}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  onValueChange={
                    (({ floatValue: v }: { floatValue: number }) =>
                      handleChange({ target: { value: v, name: "price" } })) as any
                  }
                />
                <FormHelperText>
                  {hasError("price", touched, errors, submitCount) ? errors.price : ""}
                </FormHelperText>
              </FormControl>
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                variant="filled"
                name="description"
                label="Descripción"
                onBlur={handleBlur}
                id="input-description"
                onChange={handleChange}
                value={values.description}
                InputLabelProps={{ shrink: true }}
                error={hasError("description", touched, errors, submitCount)}
                helperText={hasError("description", touched, errors, submitCount) ? errors.description : ""}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={submitForm} sx={{ mt: 3, ml: 1 }}>
              Next
            </Button>
          </Box>
        </FormikForm>
      )}
    </Formik>
  );
}
