import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Contacts from "./Contacts";

export default function App() {
  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Box marginY={5}>
          <Typography variant="h4" element="h1" children="Contacts" />
          <Typography
            variant="subtitle1"
            color="textSecondary"
            children={`Yet Another "Adphorus Frontend Challenge" Project`}
          />
        </Box>
        <Contacts />
      </Grid>
    </Container>
  );
}
