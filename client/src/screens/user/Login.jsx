import { useState } from "react"
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Login.css'

const navHamburgerCSS = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        margin: '2px',
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
    link: {
        color: '#1d7dc2',
        textDecoration: 'none',
    },
    linkBar: {
        color: '#f8f7ff',
        marginRight: 20,
    }
}));

export default function Login( {handleLogin} ) {
    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData;
    const classes = navHamburgerCSS();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div className="login-grid">
            <div className="login-logo-container">
                <img src="https://i.imgur.com/dHUKnwu.png" alt="destination hot dog logo" className="login-logo"/>
            </div>
            <div className="login-container">
                <form 
                    className="login-form"
                    onSubmit={(e) => {
                    e.preventDefault()
                    handleLogin(formData)
                    }}
                >
                    <h2 className="login-register">Login</h2>
                    <br/>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="Username"
                        name="username"
                        variant="outlined" 
                        value={username}
                        onChange={handleChange}/>
                    <br/>
                    <TextField 
                        required 
                        id="outlined-basic" 
                        label="Password" 
                        name="password"
                        variant="outlined"
                        value={password}
                        onChange={handleChange} />
                    <br/>
                    <div>
                        <Link to="/register" className="home-link">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.button}
                                    style={{margin:'5px'}}>
                                    Register
                                </Button>
                            </Link>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className={classes.button} 
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                </form>
            </div>
        </div>
    )
}