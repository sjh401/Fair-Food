import { Link } from 'react-router-dom';
import './Card.css'

export default function FoodCard(props) {
    const { name, cuisine, description, img_url, location_id, food_id, darkMode } = props;
    return (
        <div className={(darkMode === true) ? "dark-food-card-container food-card-container" : "food-card-container"}>
            <Link to={`/locations/${location_id}/foods/${food_id}`} className="locations-container-link">
                <div className={(darkMode === true) ? "dark-food-card-div food-card-div" : "food-card-div"}>{name}</div>
                <div className={(darkMode === true) ? "dark-food-card-div food-card-div" : "food-card-div"}>{cuisine}</div>
                <img src={img_url} alt={name} className="food-card-image"/>
            </Link>
        </div>
    )
}
