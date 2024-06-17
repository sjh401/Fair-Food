import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Food.css'

import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
    submit: {
        width: '16vw',
        minWidth: '300px',
        margin: 5,
        backgroundColor: '#1d7dc2',
        color: '#f8f7ff',
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
    cancel: {
        width: '16vw',
        minWidth: '300px',
        backgroundColor: '#c30c24',
        color: '#f8f7ff',
        '&:hover': {
            backgroundColor: '#e4b612',
            color: '#333432'
        },
    },
    text: {
        width: '16vw',
        minWidth: '300px',
        textDecoration: 'none',
        margin: 5,
    },
    submitDark: {
        width: '16vw',
        minWidth: 50,
        maxWidth: 100,
        margin: 5,
        backgroundColor: '#3e885b',
        color: '#d4cdc3',
        '&:hover': {
            backgroundColor: '#d4cdc3',
            color: '#3e885b'
        },
    },
    cancelDark: {
        width: '16vw',
        minWidth: 50,
        maxWidth: 100,
        backgroundColor: '#d4cdc3',
        color: '#30292f',
        '&:hover': {
            backgroundColor: '#3e885b',
            color: '#d4cdc3'
        },
    },
    textDark: {
        backgroundColor: '#d4cdc3',
        color: '#30292f',
        width: '16vmin',
        borderRadius: 5,
        minWidth: 300,
        textDecoration: 'none',
        margin: 5,
    },

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
    const { allFoods, updateFood, darkMode } = props;
    const { location_id, food_id } = useParams();
    const [ food, setFood ] = useState([]);
    const [open, setOpen] = useState(false);

    const StyledRating = withStyles({
        root: {
            display: 'flex',
            margin: '2px 15px',
            width: 270,
            fontSize: 50,
            justifyContent: 'center',
        },
        iconFilled: {
            color: (darkMode === true) ? '#3e885b' : '#e4b612',
            width: 50,
            height: 50,
        },
        iconHover: {
            color: (darkMode === true) ? '#3f4045' : '#1d7dc2',
            width: 50,
            height: 50,
        },
    })(Rating);

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

    function changeRating(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: (value*2)
        }))
    }

    return (        
        <div className="food-create">
            <div className={(darkMode === true) ? "dark-food-create-container food-create-container" : "food-create-container"}>
                <form 
                    className={(darkMode === true) ? "dark-food-create-form food-create-form" : "food-create-form"}
                    onSubmit={(e) => {
                    e.preventDefault()
                    updateFood(location_id, food_id, formData)
                    }}
                    >
                    <div className={(darkMode === true) ? "dark-food-create-title food-create-title" : "food-create-title"}>Add a Food Item</div>
                    <TextField 
                        className={(darkMode === true) ? classes.textDark : classes.text}
                        required 
                        label="Food Name" 
                        name="name"
                        variant="outlined"
                        value={name}
                        onChange={handleChange} />
                    <StyledRating 
                        name="rating" 
                        precision={0.5} 
                        value={(rating)/2}
                        onChange={changeRating}
                    />
                    <Select
                        className={(darkMode === true) ? classes.textDark : classes.text}
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        name="cuisine"
                        value={cuisine}
                        onChange={handleChange}
                    >
                        <MenuItem id="All" ><em>Cuisine</em></MenuItem>
                        <MenuItem value={"Appitizer"}>Appitizer</MenuItem>
                        <MenuItem value={"Entree"}>Entree</MenuItem>
                        <MenuItem value={"Dessert"}>Dessert</MenuItem>
                        <MenuItem value={"Snack"}>Snack</MenuItem>
                        <MenuItem value={"Beverage"}>Beverage</MenuItem>
                        <MenuItem value={"Alcohol"}>Alcohol</MenuItem>
                    </Select>
                    <TextField 
                        required 
                        className={(darkMode === true) ? classes.textDark : classes.text}
                        label="Where to find it?" 
                        name="food_stall"
                        variant="outlined"
                        value={food_stall}
                        onChange={handleChange} />
                    <TextField 
                        required 
                        className={(darkMode === true) ? classes.textDark : classes.text}
                        label="Food Description" 
                        name="description"
                        variant="outlined"
                        value={description}
                        onChange={handleChange} />
                    <TextField 
                        required 
                        className={(darkMode === true) ? classes.textDark : classes.text}
                        label="Image" 
                        name="img_url"
                        variant="outlined"
                        value={img_url}
                        onChange={handleChange} />
                    <div>
                        <Button type="submit" variant="contained" className={(darkMode === true) ? classes.submitDark : classes.submit}>
                                Update
                        </Button>
                        <Link to={`/locations/${location_id}/foods/${food_id}`} className={(darkMode === true) ? classes.textDark : classes.text}>
                                <Button type="submit" variant="contained" className={(darkMode === true) ? classes.cancelDark : classes.cancel}>
                                        Cancel
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
