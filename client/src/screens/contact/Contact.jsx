import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import '../home/Home.css'

export default function Contact(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: '',
        category: ''
    })
    const { darkMode } = props;
    const { name, email, message, category } = formData;
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        button: {
            backgroundColor: (darkMode === true) ? "#3e885b" : '#1d7dc2',
            color: (darkMode === true) ? "#d4cdc3" : '#f8f7ff',
            width: '16vw',
            maxHeight: 60,
            maxWidth: 300,
            minWidth: 200,
            '&:hover': {
                backgroundColor: (darkMode === true) ? "#d4cdc3" : '#f8f7ff',
                color: (darkMode === true) ? "#3e885b" : '#1d7dc2'
            },
        },
        text: {
            backgroundColor: (darkMode === true) ? "#3e885b" : '#f8f7ff',
            width: '16vw',
            maxHeight: 60,
            maxWidth: 300,
            minWidth: 200,
        }
    }));

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
    <div className={(darkMode === true) ? "dark-contact-create-container contact-create-container" : "contact-create-container"}>
        <form 
            className={(darkMode === true) ? "dark-contact-create-form contact-create-form" : "contact-create-form"}
            onSubmit={(e) => {
            e.preventDefault()
            history.push('/')
            }}
            >
                <div className={(darkMode === true) ? "dark-contact-create-title contact-create-title" : "contact-create-title"}>Contact Us</div>
                <TextField 
                    className={classes.text}
                    required 
                    label="Name" 
                    name="name"
                    variant="outlined"
                    value={name}
                    onChange={handleChange} />
                <br/>
                <TextField 
                    className={classes.text}
                    required 
                    label="Email" 
                    name="email"
                    variant="outlined"
                    value={email}
                    onChange={handleChange} />
                <br/>
                <TextField 
                    required 
                    className={classes.text}
                    label="Message" 
                    name="message"
                    variant="outlined"
                    value={message}
                    onChange={handleChange} />
                <br/>
                <Select
                className={classes.text}
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                label="Category"
                name="category"
                value={category}
                onChange={handleChange}
                >
                <MenuItem id="">
                    <em>Category</em>
                </MenuItem>
                <MenuItem value={"Add Location"}>Add Location</MenuItem>
                <MenuItem value={"Send a Poke"}>Send a Poke</MenuItem>
                <MenuItem value={"Donate to Hot Dog Fund"}>Donate to Hot Dog Fund</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                <br />
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        Submit
                </Button>
            </form>
        </div>
    )
}
