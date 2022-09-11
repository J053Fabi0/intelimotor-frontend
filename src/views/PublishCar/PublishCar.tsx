import Review from "./Review";
import { useState } from "react";
import Box from "@mui/material/Box";
import http from "../../http-common";
import { AxiosResponse } from "axios";
import Step from "@mui/material/Step";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import AddressForm from "./AddressForm";
import Image from "@jy95/material-ui-image";
import Button from "@mui/lab/LoadingButton";
import Stepper from "@mui/material/Stepper";
import constants from "../../utils/constants";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { numericFormatter } from "react-number-format";
import PublishCarQuery from "../../types/PublishCarQuery";
import PostSeminuevoResponse from "../../types/PostSeminuevoResponse";

const steps = ["Información del auto", "Confirmación", "Publicado"];
const initPublishCarQuery = {
  description: "",
  price: undefined as unknown as number,
};

export default function Checkout() {
  const [ssName, setSsName] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [publicationURL, setPublicationURL] = useState("");
  const [publishCarQuery, setPublishCarQuery] = useState<PublishCarQuery>({ ...initPublishCarQuery });

  const handlePublishCar = async () => {
    const { data } = await http.post<any, AxiosResponse<PostSeminuevoResponse>>("/seminuevo", publishCarQuery);
    setPublicationURL(data.publicationURL);
    setSsName(data.ssName);
  };

  const handleNext = async (step = activeStep + 1) => {
    // Si es el paso 2, publicar el carro
    if (activeStep === 2) {
      setIsLoading(true);
      await handlePublishCar();
      setIsLoading(false);
    }
    setActiveStep(step);
  };
  const handleBack = (step = activeStep - 1, resetValues = false) => {
    setActiveStep(step);
    if (resetValues) {
      setSsName("");
      setPublicationURL("");
      setPublishCarQuery({ ...initPublishCarQuery });
    }
  };

  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <AddressForm
            initialValues={publishCarQuery}
            // eslint-disable-next-line
            handleOnSubmit={(a) => (setPublishCarQuery(a), handleNext())}
          />
        );
      case 2:
        return (
          <Review
            data={[
              ["Precio", "$" + numericFormatter(publishCarQuery.price.toString(), { thousandSeparator: true })],
              ["Descripción", publishCarQuery.description],
            ]}
          />
        );
      case 3:
        return (
          <>
            <Typography variant="h5" gutterBottom>
              ¡Listo! La publicación fue exitosa
            </Typography>

            <Box mb={2} border={1}>
              <Image src={ssName ? `${constants.API}/screenshots/${ssName}` : ""} aspectRatio={0.65} />
            </Box>

            <Alert severity="info">
              Es normal si la fotografía muestra un 404, a veces toma unos minutos en que la publicación aparezca
              en{" "}
              <Link href="https://seminuevos.com" target="blank" color="inherit">
                Seminuevos
              </Link>
              .
              <br />
              Puedes revisar la publicación{" "}
              <Link href={publicationURL} target="blank">
                aquí
              </Link>
              .
            </Alert>
          </>
        );
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

        {/* El contador de pasos */}
        <Stepper
          alternativeLabel
          sx={{ pt: 3, pb: 5 }}
          activeStep={activeStep >= steps.length ? steps.length - 1 : activeStep - 1}
        >
          {steps.map((label) => (
            <Step key={label} completed={false}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* El form, la confirmación y la información de la publicación */}
        {getStepContent(activeStep)}

        {/* Los botones Siguiente y Regresar */}
        {activeStep !== 1 ? (
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {isLoading ? null : (
              <Button
                sx={{ mt: 3, ml: 1 }}
                onClick={() => handleBack(activeStep === 3 ? 1 : undefined, activeStep === 3)}
              >
                {activeStep === 3 ? "Publicar otro" : "Regresar"}
              </Button>
            )}
            {activeStep === 2 ? (
              <Button variant="contained" onClick={() => handleNext()} sx={{ mt: 3, ml: 1 }} loading={isLoading}>
                {activeStep === 2 ? "Publicar" : "Siguiente"}
              </Button>
            ) : null}
          </Box>
        ) : null}
      </Paper>
    </Container>
  );
}
