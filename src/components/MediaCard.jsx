/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useDispatch } from 'react-redux';

import { addLike } from '../slices/cardsSlice';

export default function MediaCard(props) {
  const { img, id } = props.product;

  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(addLike(id))} size="small">Share</Button>
      </CardActions>
    </Card>
  );
}