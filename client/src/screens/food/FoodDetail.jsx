import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Food.css'

export default function FoodDetail(props) {
    const { allFoods, removeFood } = props;
    const { location_id, food_id } = useParams();
    const [ food, setFood ] = useState([]);

    useEffect(() => {
        const oneFood = allFoods.find(food => {
            return food.id === Number(food_id)
        });
        setFood(oneFood);
    },[allFoods, food_id])

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
                    comments will appear here
                </div>
            </div>
        </>
    )
}
