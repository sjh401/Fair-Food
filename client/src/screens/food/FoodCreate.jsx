import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FoodCreate(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        cuisine: '',
        description: '',
        food_stall: '',
        img_url: '',
        rating: ''
    })
    const { name, cuisine, description, food_stall, img_url, rating } = formData;
    const { createFood } = props;
    const { location_id } = useParams();
    console.log(formData)
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
                createFood(location_id, formData)
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
                    <input 
                        type="text"
                        name="cuisine"
                        value={cuisine}
                        onChange={handleChange}
                    />
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
                <button>Create</button>
            </form>
        </div>
    )
}
