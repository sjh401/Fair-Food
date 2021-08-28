import React from 'react'
import { Link } from 'react-router-dom';
import LocationCard from '../../components/card/LocationCard';
import './Location.css'

export default function Locations(props) {
    const { locations } = props;

    return (
        <div className="locations">
            <div  className="locations-containter">
            {locations.map(location => (
                <React.Fragment key={location.id}>
                    <Link to={`/locations/${location.id}`} className="locations-container-link">
                        <LocationCard 
                            name={location.name}
                            city={location.city}
                            img_url={location.img_url}
                            description={location.description}
                        />
                    </Link>
                </React.Fragment>
                ))}
            </div>
        </div>
    )
}
