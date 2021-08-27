import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/card/CommentCard';

import './Food.css'
import CardFood from '../../components/card/CardFood';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        color: '#f8f7ff',
        width: 40,
        height: 20,
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
    text: {
        width: 300,
        height: 'auto',
    }
}));

export default function FoodDetail(props) {
    const classes = useStyles();

    const { 
        allFoods, 
        removeFood, 
        allComments, 
        currentUser, 
        allUsers, 
        createComment,
        removeComment
    } = props;

    const { location_id, food_id } = useParams();
    const [ food, setFood ] = useState([]);
    const [ comments, setComments ] = useState([]);
    const [ formData, setFormData ] = useState({
        message: ''
    });
    
    useEffect(() => {
        const oneFood = allFoods.find(food => {
            return food.id === Number(food_id)
        });
        setFood(oneFood);
    },[allFoods, food_id, currentUser])

    useEffect(() => {
        const foodComments = allComments.filter(comment => comment?.food_id === Number(food_id));
        setComments(foodComments);
    },[allComments, food_id, currentUser])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <>
            <div className="food-detail-grid">
                <div className="food-details">
                    <CardFood 
                        name={food?.name}
                        cuisine={food?.cuisine}
                        description={food?.description}
                        img_url={food?.img_url}
                        rating={(food?.rating) ? food.rating/2: 1}
                        removeFood={removeFood}
                        location_id={location_id}
                        food_id={food_id}
                    />
                </div>
                <div className="food-detail-comments">
                {currentUser && 
                    <div className="food-detail-create-comment">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            createComment(location_id, food_id, formData)
                            setFormData({message: ''})
                        }}>
                        <TextField 
                            required 
                            className={classes.text}
                            id="outlined-basic" 
                            label="Message" 
                            name="message"
                            variant="outlined"
                            value={formData.message}
                            onChange={handleChange} />
                        <div>posting as {currentUser?.username}</div>
                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                Post
                        </Button>
                        </form>
                    </div>}
                    <CommentCard
                        comments={comments}
                        currentUser={currentUser}
                        allUsers={allUsers}
                        removeComment={removeComment}
                        food={food}
                        location_id={location_id}
                        food_id={food_id}
                    />
                </div>
            </div>
        </>
    )
}
