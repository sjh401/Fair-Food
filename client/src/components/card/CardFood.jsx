import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';

const useStyles = makeStyles({
    root: {
        width: 400,
        borderRadius: 40,
        backgroundColor: "#1d7dc2",
    },
    media: {
        height: 200,
    },
});

export default function CardFood(props) {
    const { locaiton_id, food_id } = useParams();
    const { name, cuisine, description, img_url, rating, removeFood } = props;
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={img_url}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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
                <Typography variant="body2" component="div">
                {cuisine}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div">
                {description}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/locations/${locaiton_id}/foods/${food_id}/edit`}>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                </Link>
                    <Button size="small" color="primary" onClick={() => removeFood(locaiton_id,food_id)}>
                        Delete
                    </Button>
            </CardActions>
        </Card>
    );
}
