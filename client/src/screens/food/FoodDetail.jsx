import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/card/CommentCard';

import './Food.css'
import CardFood from '../../components/card/CardFood';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        color: '#f8f7ff',
        width: 50,
        height: 20,
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
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
                    <div className="food-detail-create-comment">
                        <div>posting as {currentUser?.username}</div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            createComment(location_id, food_id, formData)
                            setFormData({message: ''})
                        }}>
                            <input
                                type="text"
                                name="message"
                                placeholder="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <Button variant="contained" color="primary" className={classes.button}>
                                post
                            </Button>
                        </form>
                    </div>
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
