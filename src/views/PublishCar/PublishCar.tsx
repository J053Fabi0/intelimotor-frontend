import Review from "./Review";
import { numericFormatter } from "react-number-format";
import { useState } from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Paper from "@mui/material/Paper";
import AddressForm from "./AddressForm";
import Button from "@mui/lab/LoadingButton";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PublishCarQuery from "../../types/PublishCarQuery";

const steps = ["Información del auto", "Confirmación", "Publicado"];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [publishCarQuery, setPublishCarQuery] = useState<PublishCarQuery>({
    description: "",
    price: undefined as unknown as number,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (activeStep === 1) {
      setIsLoading(true);
    } else setActiveStep(activeStep + 1);
  };
  const handleBack = () => setActiveStep(activeStep - 1);

  const handleOnSubmit = async (a: PublishCarQuery) =>
    new Promise((res) =>
      setTimeout(() => {
        res(0);
        alert("Hola");
      }, 2000)
    );

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            initialValues={publishCarQuery}
            // eslint-disable-next-line
            handleOnSubmit={(a) => (setPublishCarQuery(a), handleNext())}
          />
        );
      case 1:
        return (
          <Review
            data={[
              ["Precio", "$" + numericFormatter(publishCarQuery.price.toString(), { thousandSeparator: true })],
              ["Descripción", publishCarQuery.description],
            ]}
          />
        );
      case 2:
      default:
        return null;
    }
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="elevation" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Publicar auto
        </Typography>

        <Stepper
          alternativeLabel
          sx={{ pt: 3, pb: 5 }}
          activeStep={activeStep >= steps.length ? steps.length - 1 : activeStep}
        >
          {steps.map((label) => (
            <Step key={label} completed={false}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order confirmation, and will send you an update
              when your order has shipped.
            </Typography>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}

            {activeStep >= 1 ? (
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <>
                  {isLoading ? null : (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }} loading={isLoading}>
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </>
              </Box>
            ) : null}
          </>
        )}
      </Paper>
    </Container>
  );
}
