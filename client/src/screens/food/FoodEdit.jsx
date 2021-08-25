import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Food.css'

export default function FoodEdit(props) {
    const { allFoods } = props;
    const { food_id } = useParams();
    const [ food, setFood ] = useState([]);

    useEffect(() => {
        const oneFood = allFoods.find(food => {
            return food.id === Number(food_id)
        });
        setFood(oneFood);
    },[allFoods, food_id])
    
    
    return (
        <div>
            editing food
        </div>
    )
}
