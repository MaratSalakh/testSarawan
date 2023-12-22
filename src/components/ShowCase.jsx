/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { useState } from "react";

import { Container, Grid, Box, Switch, FormControlLabel } from "@mui/material"

const ShowCase = (props) => {
  const { MediaCard } = props;

  const [hideLikes, setHideLikes] = useState(false);

  const ids = useSelector((state) => state.cards.ids);
  const entities = useSelector((state) => state.cards.entities);

  return (
    <Container maxWidth="xl">
      <Box mb={3}>
        <FormControlLabel control={<Switch
          checked={hideLikes}
          onChange={() => setHideLikes(!hideLikes)}
          inputProps={{ 'aria-label': 'controlled' }}
        />} label="Only likes" />
      </Box>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 6 }}>
        {ids.filter((id) => {
          if (hideLikes === true) {
            return entities[id].isLike;
          }
          return true;
        })
          .map((id) => {
            const product = entities[id];
            const { visible } = product;
            return (
              visible ? < Grid item key={id} xs={12} sm={6} md={3} >
                {MediaCard({ product })}
              </Grid> : null
            );
          })}
      </Grid>
    </Container >
  );
}

export default ShowCase;
