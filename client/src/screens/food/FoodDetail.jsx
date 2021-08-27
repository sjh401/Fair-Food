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
    },[allFoods, food_id])

    useEffect(() => {
        const foodComments = allComments.filter(comment => comment?.food_id === Number(food_id));
        setComments(foodComments);
    },[allComments, food_id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    // const halfTheRating = () => {
    //     if(food.rating){
    //         return (food.rating)/2
    //     }
    // }


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
                        location_id={food?.location_id}
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
                            <button>Post</button>
                        </form>
                    </div>
                    <CommentCard
                        comments={comments}
                        currentUser={currentUser}
                        allUsers={allUsers}
                        removeComment={removeComment}
                        food={food}
                    />
                </div>
            </div>
        </>
    )
}
