import './Card.css'

export default function FoodCard(props) {
    const { name, cuisine, description, img_url } = props;
    return (
        <div className="food-card-container">
            <div className="food-card-div">{name}</div>
            <div className="food-card-div">{cuisine}</div>
            <img src={img_url} alt={name} className="food-card-image"/>
            <div className="food-card-description">{description}</div>
        </div>
    )
}
