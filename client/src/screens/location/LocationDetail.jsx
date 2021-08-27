import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import FoodCard from '../../components/card/FoodCard';
import './Location.css'

const ColorButton = withStyles((theme) => ({
    root: {
      backgroundColor: '#1d7dc2',
      '&:hover': {
        backgroundColor: '#1d7dc2',
      },
    },
  }))(Button);
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function LocationDetail(props) {
    const { allLocations, allFoods, currentUser } = props;
    const { location_id } = useParams();
    const [ location, setLocation ] = useState([]);
    const [ foods, setFoods ] = useState([]);
    const [ filterFoods, setFilterFoods ] = useState([]);
    const [ filter, setFilter ] = useState({cuisine: "All"})

    const classes = ColorButton;

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

    useEffect(() => {
        if(filter.cuisine !== "All") {
            setFilterFoods(foods.filter(food => food.cuisine === filter.cuisine))
        } else {
            setFilterFoods(foods)
        }
    },[filter, foods])

    const handleChange = (e) => {
        const { value } = e.target;
        setFilter( {cuisine: value} )
    }


    
    return (
        <div className="location-detail-grid">
            <div className="location-detail-header">
                <h1>{location?.name}</h1>
                
            </div>
            <div className="location-detail-foods">
                <form>
                    <label>
                        Filter Foods by Cuisine:
                        <select 
                            name="cuisine"
                            value={filter.cuisine}
                            onChange={handleChange}
                            className="location-detail-select"
                            >
                            <option value="All">All</option>
                            <option value="Appitizer">Appitizer</option>
                            <option value="Entree">Entree</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Snack">Snack</option>
                            <option value="Beverage">Beverage</option>
                            <option value="Alcohol">Alcohol</option>
                        </select>
                    </label>
                </form>
                <div className="location-detail-food-cards">
                    {filterFoods.map(food => (
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
            <div className="location-detail-description">
                {currentUser &&
                    <div>
                        <Link to={`/locations/${location_id}/foods/new`} className="locations-container-link">
                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                            Create New Food
                        </ColorButton>
                        </Link>
                    </div>
                }
                <div className="location-detail-description-card">
                    {location?.description}
                </div>
            </div>
        </div>
    )
}
