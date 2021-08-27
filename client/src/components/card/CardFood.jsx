import { Link } from 'react-router-dom'
import { cardFoodCSS } from '../../assets/material';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';

export default function CardFood(props) {
    const { name, cuisine, description, img_url, rating, removeFood, location_id, food_id } = props;
    const classes = cardFoodCSS();


    return (
        <Card className={classes.root}>
            <CardActionArea >
            <CardMedia
                className={classes.media}
                image={img_url}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"  className={classes.text}>
                {name}
                </Typography>
                <Typography variant="body2" component="div">
                <StarRatings
                    rating={rating}
                    starDimension="25px"
                    starRatedColor="#c30c24"
                    starEmptyColor="#f8f7ff"
                    starHoverColor="#1d7dc2"
                />
                </Typography>
                <Typography variant="body2" component="div" className={classes.text}>
                {cuisine}
                </Typography>
                <Typography variant="body2" component="div" className={classes.text}>
                {description}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/locations/${location_id}/foods/${food_id}/edit`} className={classes.link}>
                    <Button size="small" color="primary" className={classes.button}>
                        Edit
                    </Button>
                </Link>
                    <Button size="small" color="primary" onClick={() => removeFood(location_id,food_id)} className={classes.button}>
                        Delete
                    </Button>
            </CardActions>
        </Card>
    );
}
