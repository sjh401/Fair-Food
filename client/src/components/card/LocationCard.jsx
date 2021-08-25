import './Card.css'

export default function LocationCard(props) {
    const { name, city, description, img_url } = props;
    return (
        <div className="location-card-container">
            <div className="location-card-div">{name}</div>
            <div className="location-card-div">{city}</div>
            <img src={img_url} alt={name} className="location-card-image"/>
            <div className="location-card-description">{description}</div>
        </div>
    )
}
