import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import About from '../screens/about/About';
import Contact from '../screens/contact/Contact';
import FoodCreate from '../screens/food/FoodCreate';
import FoodDetail from '../screens/food/FoodDetail';
import FoodEdit from '../screens/food/FoodEdit';
import LocationDetail from '../screens/location/LocationDetail';
import Locations from '../screens/location/Locations';


import { getAllFoods, postFood, putFood } from '../services/foods';
import { getAllLocations } from '../services/locations';

export default function Container() {
    const [ allLocations, setAllLocations ] = useState([]);
    const [ allFoods, setAllFoods ] = useState([]);
    const history = useHistory();

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

    const createFood = async (location_id, foodData) => {
        const newFood = await postFood(location_id, foodData);
        setAllFoods(prevFoodData => ([
            ...prevFoodData,
            newFood
        ]))
        history.push(`/locations/${location_id}`)
    }
    const updateFood = async (location_id, food_id, foodData) => {
        const newFood = await putFood(location_id, food_id, foodData);
        setAllFoods(prevFoodData => prevFoodData.map(food => {
            return food.id === Number(food_id) ? newFood : food
        }))
        history.push(`/locations/${location_id}`)
    }

    return (
        <>
            <Switch>
                <Route path="/locations/:location_id/foods/:food_id/edit">
                    <FoodEdit 
                        allFoods={allFoods}
                        updateFood={updateFood}
                    />
                </Route>
                <Route path="/locations/:location_id/foods/new">
                    <FoodCreate
                        createFood={createFood}
                    />
                </Route>
                <Route path="/locations/:location_id/foods/:food_id">
                    <FoodDetail
                        allFoods={allFoods}
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
