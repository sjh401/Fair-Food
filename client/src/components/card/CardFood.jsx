import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';

import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

export const cardFoodCSS = makeStyles((theme) => ({
    root: {
        gridArea: '1/1/3/4',
        justifySelf: 'center',
        width: '40vmin',
        height: '70vmin',
        margin: 50,
        minWidth: 350,
        minHeight: 600,
        borderRadius: 20,
        backgroundColor: "#1d7dc2",
        boxShadow: '0px 2px 8px #333432',
    },
    media: {
        width: '40vmin',
        borderRadius: '20px 20px 0 0',
        minWidth: 350,
        maxHeight: 300,
    },
    button: {
        color: '#f8f7ff',
    },
    link: {
        textDecoration: 'none',
    },
    text: {
        color: '#f8f7ff',
        overFlow: 'auto'
    }
}));

export default function CardFood(props) {
    const { name, cuisine, description, img_url, rating, removeFood, location_id, food_id, currentUser, user_id } = props;
    const classes = cardFoodCSS();

    return (
        <Card className={classes.root}>
            <CardActionArea >
            <CardMedia
                className={classes.media}
                component="img"
                src={img_url}
                alt={name}
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
                {(currentUser?.id === user_id) &&
                <React.Fragment>
                    <Link to={`/locations/${location_id}/foods/${food_id}/edit`} className={classes.link}>
                        <Button size="small" color="primary" className={classes.button}>
                            Edit
                        </Button>
                    </Link>
                    <Button size="small" color="primary" onClick={() => removeFood(location_id,food_id)} className={classes.button}>
                        Delete
                    </Button>
                </React.Fragment>
                }
            </CardActions>
        </Card>
    );
}
