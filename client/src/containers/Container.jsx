import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../screens/about/About';
import Contact from '../screens/contact/Contact';
import FoodCreate from '../screens/food/FoodCreate';
import FoodDetail from '../screens/food/FoodDetail';
import FoodEdit from '../screens/food/FoodEdit';
import LocationDetail from '../screens/location/LocationDetail';
import Locations from '../screens/location/Locations';


import { getAllFoods } from '../services/foods';
import { getAllLocations } from '../services/locations';

export default function Container() {
    const [ allLocations, setAllLocations ] = useState([]);
    const [ allFoods, setAllFoods ] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            const locations = await getAllLocations();
            setAllLocations(locations);
        }
        fetchLocations();
    },[])

    useEffect(() => {
        const fetchFoods = async () => {
            const foods = await getAllFoods();
            setAllFoods(foods);
        }
        fetchFoods();
    },[])

    return (
        <>
            <Switch>
                <Route path="/locations/:location_id/foods/:food_id/edit">
                    <FoodEdit 
                        allFoods={allFoods}
                    />
                </Route>
                <Route path="/locations/:location_id/foods/:food_id">
                    <FoodDetail
                        allFoods={allFoods}
                    />
                </Route>
                <Route path="/locations/:location_id/foods">
                    <FoodCreate
                    />
                </Route>
                <Route path="/locations/:location_id">
                    <LocationDetail
                        allLocations={allLocations}
                        allFoods={allFoods}
                    />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/locations">
                    <Locations 
                        locations={allLocations}
                    />
                </Route>
            </Switch>
        </>
    )
}
