import { useState } from 'react';
import './Card.css'

export default function LocationCard(props) {
    const { name, city, description, img_url } = props;
    const [ toggle, setToggle ] = useState(false)
    return (
        <div className="location-card-container" onMouseEnter={() => setToggle(prevToggle => !prevToggle)} onMouseLeave={() => setToggle(prevToggle => !prevToggle)}>
            <div className={(toggle === false) ? "appear" : "disappear"}>
                <div className="location-card-div">{name}</div>
                <div className="location-card-div">{city}</div>
                <img src={img_url} alt={name} className="location-card-image"/>
            </div>
            <div className={(toggle === false) ? "disappear" :"location-card-description"}>{description}</div>
        </div>
    )
}
