import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CommentCard from '../../components/card/CommentCard';

import StarRatings from 'react-star-ratings';
import './Food.css'

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
                    <h1>{food?.name}</h1>
                    <div>
                        <img src={food?.img_url} alt={food?.name} className="food-detail-image"/>
                        <div>{food?.cuisine} {food?.rating}</div>
                        <StarRatings 
                            rating={food?.rating}
                            starDimension="25px"
                            starRatedColor="#c30c24"
                            starEmptyColor="#f8f7ff"
                            starHoverColor="#1d7dc2"
                        />
                        <div>{food?.food_stall}</div>
                        <div>{food?.description}</div>
                        {(currentUser?.id === food?.user_id) &&
                            <React.Fragment>
                                <Link to={`/locations/${food?.location_id}/foods/${food?.id}/edit`} className="locations-container-link">Edit</Link>
                                <button onClick={() => removeFood(location_id, food_id)}>Delete Food</button>
                            </React.Fragment>
                        }
                    </div>
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
