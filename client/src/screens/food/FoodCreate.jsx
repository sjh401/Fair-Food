import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { blue, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    submit: {
        width: '16vw',
        minWidth: '300px',
        marginBottom: 10,
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
    cancel: {
        width: '16vw',
        minWidth: '300px',
        marginBottom: 10,
        '&:hover': {
            backgroundColor: '#e4b612',
            color: '#333432'
        },
    },
    text: {
        width: '16vw',
        minWidth: '300px',
        textDecoration: 'none',
    }
}));

const theme = createTheme({
    palette: {
        primary: {
        main: '#1d7dc2',
        },
        secondary: {
            main: '#c30c24',
        },
    }});

export default function FoodCreate(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        cuisine: '',
        description: '',
        food_stall: '',
        img_url: '',
        rating: ''
    })
    const { name, cuisine, description, food_stall, img_url, rating } = formData;
    const { createFood } = props;
    const { location_id } = useParams();

    const [open, setOpen] = useState(false);

    const classes = useStyles();

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
        <div className="food-create">
            <div className="food-create-container">
                <form 
                    className="food-create-form"
                    onSubmit={(e) => {
                    e.preventDefault()
                    createFood(location_id, formData)
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
                        <ThemeProvider theme={theme}>
                            <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                                    Create
                            </Button>
                            <Link to={`/locations/${location_id}`} className={classes.text}>
                                <Button type="submit" variant="contained" color="secondary" className={classes.cancel}>
                                        Cancel
                                </Button>
                            </Link>
                        </ThemeProvider>
                </form>
            </div>
        </div>
    )
}
