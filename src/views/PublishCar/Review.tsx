import { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Review({ data }: { data: [string, any][] }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Confirma la información
      </Typography>

      <Box ml={1}>
        {data.map(([key, value]) => (
          <Fragment key={key}>
            <Typography fontWeight={500}>{key}</Typography>
            <Typography mb={2} ml={1}>
              {/* Este map transforma los saltos de línea en <br/> */}
              {(value.toString() as string).split("\n").map((value, i, a) => (
                <Fragment key={i}>
                  {value}
                  {i === a.length - 1 ? null : <br />}
                </Fragment>
              ))}
            </Typography>
          </Fragment>
        ))}
      </Box>
    </>
  );
}
