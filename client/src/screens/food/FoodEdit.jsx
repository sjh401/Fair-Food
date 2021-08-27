import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Food.css'

export default function FoodEdit(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        cuisine: '',
        description: '',
        food_stall: '',
        img_url: '',
        rating: ''
    })
    const { name, cuisine, description, food_stall, img_url, rating } = formData;
    const { allFoods, updateFood } = props;
    const { location_id, food_id } = useParams();
    const [ food, setFood ] = useState([]);

    useEffect(() => {
        const oneFood = allFoods.find(food => {
            return food.id === Number(food_id)
        });
        setFood(oneFood);
    },[allFoods, food_id])

    useEffect(() => {
        const prefillFormData = () => {
            const foodItem = allFoods?.find(food => food.id === Number(food_id));
            setFormData({ 
                name: foodItem.name,
                cuisine: foodItem.cuisine,
                description: foodItem.description,
                food_stall: foodItem.food_stall,
                img_url: foodItem.img_url,
                rating: foodItem.rating
            });
        }
        if(allFoods.length) {
            prefillFormData();
        }
    }, [allFoods, food_id, food])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    return (
        <div className="food-create-form">
        <form onSubmit={(e) => {
            e.preventDefault()
            // call the create dog function and pass in the formData;
            updateFood(location_id, food_id, formData)
            }}
            >
            <label>
                Food Name
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Rating
                <input 
                    type="number"
                    name="rating"
                    value={rating}
                    onChange={handleChange}
                />
            </label>
            <label>
                Cuisine
                <select 
                    name="cuisine"
                    value={cuisine}
                    onChange={handleChange}>
                    <option id="Appitizer">Appitizer</option>
                    <option id="Entree">Entree</option>
                    <option id="Dessert">Dessert</option>
                    <option id="Snack">Snack</option>
                    <option id="Beverage">Beverage</option>
                    <option id="Alcohol">Alcohol</option>
                </select>
            </label>
            <label>
                Where to find it?
                <input 
                    type="text"
                    name="food_stall"
                    value={food_stall}
                    onChange={handleChange}
                />
            </label> 
            <label>
                Food Description
                <input 
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleChange}
                />
            </label>
            <label>
                Image
                <input 
                    type="text"
                    name="img_url"
                    value={img_url}
                    onChange={handleChange}
                />
            </label>
            <button>Update</button>
        </form>
    </div>
    )
}
