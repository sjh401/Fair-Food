import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/card/CommentCard';

import './Food.css'
import CardFood from '../../components/card/CardFood';


export default function FoodDetail(props) {
    const { 
        allFoods, 
        removeFood, 
        allComments, 
        currentUser, 
        allUsers, 
        createComment,
        updateComment,
        removeComment
    } = props;

    const { location_id, food_id } = useParams();
    const [ food, setFood ] = useState([]);
    const [ comments, setComments ] = useState([]);
    
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

    return (
        <>
            <div className="food-detail-grid">
                    <CardFood 
                        name={food?.name}
                        cuisine={food?.cuisine}
                        description={food?.description}
                        img_url={food?.img_url}
                        rating={(food?.rating) ? food.rating/2: 1}
                        removeFood={removeFood}
                        location_id={location_id}
                        food_id={food_id}
                        currentUser={currentUser}
                        user_id={food?.user_id}
                    />
                <div className="food-detail-comments">
                    <CommentCard
                        currentUser={currentUser}
                        allUsers={allUsers}
                        allComments={allComments}
                        createComment={createComment}
                        removeComment={removeComment}
                        updateComment={updateComment}
                        comments={comments}
                        food={food}
                        location_id={location_id}
                        food_id={food_id}
                    />
                </div>
            </div>
        </>
    )
}
