import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import About from '../screens/about/About';
import CommentEdit from '../screens/CommentEdit';
import Contact from '../screens/contact/Contact';
import FoodCreate from '../screens/food/FoodCreate';
import FoodDetail from '../screens/food/FoodDetail';
import FoodEdit from '../screens/food/FoodEdit';
import Home from '../screens/Home';
import LocationDetail from '../screens/location/LocationDetail';
import Locations from '../screens/location/Locations';
import { deleteComment, getAllComments, postComment, putComment } from '../services/comments';


import { deleteFood, getAllFoods, postFood, putFood } from '../services/foods';
import { getAllLocations } from '../services/locations';

export default function Container(props) {
    const [ allLocations, setAllLocations ] = useState([]);
    const [ allFoods, setAllFoods ] = useState([]);
    const [ allComments, setAllComments ] = useState([]);
    const { currentUser, allUsers } = props;
    const history = useHistory();
    // const { currentUser } = props;

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

    useEffect(() => {
        const fetchComments = async () => {
            const comments = await getAllComments();
            setAllComments(comments);
        }
        fetchComments();
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
        history.push(`/locations/${location_id}/foods/${food_id}`)
    }
    const removeFood = async (location_id, food_id) => {
        await deleteFood(location_id, food_id);
        setAllFoods(prevFoodData => prevFoodData.filter(food => food.id !== Number(food_id)))
        history.push(`/locations/${location_id}`)
    }

    const createComment = async (location_id, food_id, commentData) => {
        const newComment = await postComment(location_id, food_id, commentData);
        setAllComments(prevCommentData => ([
            ...prevCommentData,
            newComment
        ]))
        history.push(`/locations/${location_id}/foods/${food_id}`)
    }
    
    const updateComment = async (location_id, food_id, comment_id, commentData) => {
        const updated = await putComment(location_id, food_id, comment_id, commentData);
        setAllComments(prevCommentData => prevCommentData.map(comment => {
            return comment.id === Number(comment_id) ? updated : comment
        }))
        history.push(`/locations/${location_id}/foods/${food_id}`)
    }

    const removeComment = async (location_id, food_id, comment_id) => {
        await deleteComment(location_id, food_id, comment_id)
        setAllComments(prevCommentData => prevCommentData.filter(comment => comment.id !== Number(comment_id)))
        history.go(`/locations/${location_id}/foods/${food_id}`)
    }

    return (
        <>
            <Switch>
            <Route path="/locations/:location_id/foods/:food_id/comments/:comment_id">
                <CommentEdit
                    updateComment={updateComment}
                    currentUser={currentUser}
                    allComments={allComments}
                />
            </Route>
                <Route path="/locations/:location_id/foods/:food_id/edit">
                    <FoodEdit 
                        allFoods={allFoods}
                        updateFood={updateFood}
                        currentUser={currentUser}
                    />
                </Route>
                <Route path="/locations/:location_id/foods/new">
                    <FoodCreate
                        createFood={createFood}
                        currentUser={currentUser}
                    />
                </Route>
                <Route path="/locations/:location_id/foods/:food_id">
                    <FoodDetail
                        allFoods={allFoods}
                        removeFood={removeFood}
                        allComments={allComments}
                        currentUser={currentUser}
                        allUsers={allUsers}
                        createComment={createComment}
                        removeComment={removeComment}
                    />
                </Route>
                <Route path="/locations/:location_id">
                    <LocationDetail
                        allLocations={allLocations}
                        allFoods={allFoods}
                        currentUser={currentUser}
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
                <Route to="/">
                    <Home 
                        allFoods={allFoods}
                    />
                </Route>
            </Switch>
        </>
    )
}
