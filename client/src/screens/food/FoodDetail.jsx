import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CommentCard from '../../components/card/CommentCard';
import './Food.css'

export default function FoodDetail(props) {
    const { allFoods, removeFood, allComments } = props;
    const { location_id, food_id } = useParams();
    const [ food, setFood ] = useState([]);
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        const oneFood = allFoods.find(food => {
            return food.id === Number(food_id)
        });
        setFood(oneFood);
    },[allFoods, food_id])

    useEffect(() => {
        const foodComments = allComments.filter(comment => comment.food_id === Number(food_id));
        setComments(foodComments);
    },[allComments, food_id])

    return (
        <>
            <div className="food-detail-grid">
                <div className="food-details">
                    <h1>{food?.name}</h1>
                    <div>
                        <img src={food?.img_url} alt={food?.name} className="food-detail-image"/>
                        <div>{food?.cuisine}</div>
                        <div>{food?.rating}</div>
                        <div>{food?.food_stall}</div>
                        <div>{food?.description}</div>
                        <Link to={`/locations/${food?.location_id}/foods/${food?.id}/edit`} className="locations-container-link">Edit</Link>
                        <button onClick={() => removeFood(location_id, food_id)}>Delete Food</button>
                    </div>
                </div>
                <div className="food-comments">
                    <CommentCard
                        comments={comments}
                    />
                </div>
            </div>
        </>
    )
}
