import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Food.css'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        width: '16vw',
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
    text: {
        width: '16vw'
    }
}));
export default function FoodEdit(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        cuisine: '',
        description: '',
        food_stall: '',
        img_url: '',
        rating: ''
    })
    const { name, cuisine, description, food_stall, img_url, rating } = formData;
    const { allFoods, updateFood } = props;
    const { location_id, food_id } = useParams();
    const [ food, setFood ] = useState([]);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        const oneFood = allFoods.find(food => {
            return food.id === Number(food_id)
        });
        setFood(oneFood);
    },[allFoods, food_id])

    useEffect(() => {
        const prefillFormData = () => {
            const foodItem = allFoods?.find(food => food.id === Number(food_id));
            setFormData({ 
                name: foodItem.name,
                cuisine: foodItem.cuisine,
                description: foodItem.description,
                food_stall: foodItem.food_stall,
                img_url: foodItem.img_url,
                rating: foodItem.rating
            });
        }
        if(allFoods.length) {
            prefillFormData();
        }
    }, [allFoods, food_id, food])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="food-create-container">
            <form 
                className="food-create-form"
                onSubmit={(e) => {
                e.preventDefault()
                // call the create dog function and pass in the formData;
                updateFood(location_id, food_id, formData)
                }}
                >
                    <TextField 
                        className={classes.text}
                        required 
                        id="outlined-basic" 
                        label="Food Name" 
                        name="name"
                        variant="outlined"
                        value={name}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        className={classes.text}
                        required 
                        id="outlined-basic" 
                        label="Rating" 
                        name="rating"
                        variant="outlined"
                        value={rating}
                        onChange={handleChange} />
                    <br/>
                    <Select
                    className={classes.text}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    name="cuisine"
                    value={cuisine}
                    onChange={handleChange}
                    // style={{color:'#f8f7ff'}}
                    >
                    <MenuItem id="All" >
                        <em>Cuisine</em>
                    </MenuItem>
                    <MenuItem value={"Appitizer"}>Appitizer</MenuItem>
                    <MenuItem value={"Entree"}>Entree</MenuItem>
                    <MenuItem value={"Dessert"}>Dessert</MenuItem>
                    <MenuItem value={"Snack"}>Snack</MenuItem>
                    <MenuItem value={"Beverage"}>Beverage</MenuItem>
                    <MenuItem value={"Alcohol"}>Alcohol</MenuItem>
                    </Select>
                    <br />
                    <TextField 
                        required 
                        className={classes.text}
                        id="outlined-basic" 
                        label="Where to find it?" 
                        name="food_stall"
                        variant="outlined"
                        value={food_stall}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        required 
                        className={classes.text}
                        id="outlined-basic" 
                        label="Food Description" 
                        name="description"
                        variant="outlined"
                        value={description}
                        onChange={handleChange} />
                    <br/>
                    <TextField 
                        required 
                        className={classes.text}
                        id="outlined-basic" 
                        label="Image" 
                        name="img_url"
                        variant="outlined"
                        value={img_url}
                        onChange={handleChange} />
                    <br/>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                            Create New Food
                    </Button>
            </form>
        </div>
    )
}
