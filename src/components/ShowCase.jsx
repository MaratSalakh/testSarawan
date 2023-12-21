/* eslint-disable react/prop-types */

import { Container, Grid } from "@mui/material"
import { useSelector } from "react-redux";

const ShowCase = (props) => {
  const { MediaCard } = props;

  const ids = useSelector((state) => state.cards.ids);
  const entities = useSelector((state) => state.cards.entities);

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {ids.map((id) => {
          const product = entities[id];
          return (
            <Grid item key={id} xs={12} sm={6} md={3}>
              {MediaCard({ product })}
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}

export default ShowCase;
