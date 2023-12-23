/* eslint-disable react/prop-types */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';

import { addLike, changeVision } from '../slices/cardsSlice';

export default function MediaCard(props) {
  const { img, id, isLike, description, name } = props.product;

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
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item xs={10} >
            <IconButton onClick={() => dispatch(addLike(id))} aria-label="like">
              {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Grid>
          <Grid item xs={2} >
            <IconButton onClick={() => dispatch(changeVision(id))} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card >
  );
}