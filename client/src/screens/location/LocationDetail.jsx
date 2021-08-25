import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import FoodCard from '../../components/card/FoodCard';
import './Location.css'

export default function LocationDetail(props) {
    const { allLocations, allFoods } = props;
    const { location_id } = useParams();
    const [ location, setLocation ] = useState([]);
    const [ foods, setFoods ] = useState([]);

    useEffect(() => {
        const oneLocation = allLocations.find(location => {
            return location.id === Number(location_id)
        });
        setLocation(oneLocation);
    },[allLocations, location_id])

    useEffect(() => {
        const locationFoods = allFoods?.filter(food => food.location_id === Number(location_id));
        setFoods(locationFoods)
    },[allFoods, location_id])
    
    return (
        <div>
            <h1>{location?.name}</h1>
            <div className="locationd-detail-foods">
                {foods.map(food => (
                        <React.Fragment key={food.id}>
                            <Link to={`/locations/${location_id}/foods/${food.id}`} className="locations-container-link">
                                <FoodCard
                                    name={food.name}
                                    cuisine={food.cuisine}
                                    description={food.description}
                                    img_url={food.img_url}
                                />
                            </Link>
                        </React.Fragment>
                    ))}
            </div>

        </div>
    )
}
