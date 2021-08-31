import React from 'react'
import { Link } from 'react-router-dom';
import LocationCard from '../../components/card/LocationCard';
import './Location.css'

export default function Locations(props) {
    const { locations, darkMode } = props;

    return (
        <div className="locations">
            <div  className={(darkMode === true) ? "dark-locations-containter locations-containter" : "locations-containter"}>
            {locations.map(location => (
                <React.Fragment key={location.id}>
                    <Link to={`/locations/${location.id}`} className={(darkMode === true) ? "dark-locations-container-link locations-container-link" : "locations-container-link"}>
                        <LocationCard 
                            name={location.name}
                            city={location.city}
                            img_url={location.img_url}
                            description={location.description}
                            darkMode={darkMode}
                        />
                    </Link>
                </React.Fragment>
                ))}
            </div>
        </div>
    )
}
