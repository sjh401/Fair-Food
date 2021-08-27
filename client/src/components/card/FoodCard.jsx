import { Link } from 'react-router-dom';
import './Card.css'

export default function FoodCard(props) {
    const { name, cuisine, description, img_url, location_id, food_id } = props;
    return (
        <div className="food-card-container">
            <Link to={`/locations/${location_id}/foods/${food_id}`} className="locations-container-link">
                <div className="food-card-div">{name}</div>
                <div className="food-card-div">{cuisine}</div>
                <img src={img_url} alt={name} className="food-card-image"/>
                <div className="food-card-description">{description}</div>
            </Link>
        </div>
    )
}
