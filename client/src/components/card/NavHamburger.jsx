import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade'

const ITEM_HEIGHT = 100;
const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
}));

export default function NavHamburger(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [ links, setLinks ] = useState([])
    const  { handleLogout, currentUser } = props; 
    const open = Boolean(anchorEl);

    const classes = useStyles();

    useEffect(() => {
    const filterForUser = () => {
        if(currentUser) {
            const options = [
                <div>Welcome, {currentUser.username}!</div>,
                <Link to="/" className="hamburger-link">Home</Link>,
                <Link to="/locations" className="hamburger-link">Locations</Link>,
                <Link to="/about" className="hamburger-link">About</Link>,
                <Link to="/contact" className="hamburger-link">Contact Us</Link>,
                <Button variant="contained" color="primary" className={classes.button} onClick={handleLogout}>Logout</Button>
            ];
            setLinks(options);
        } else {
            const options = [
                <div>Welcome!</div>,
                <Link to="/" className="hamburger-link">Home</Link>,
                <Link to="/login" className="hamburger-link">Login/Register</Link>,
                <Link to="/locations" className="hamburger-link">Locations</Link>,
                <Link to="/about" className="hamburger-link">About</Link>,
                <Link to="/contact" className="hamburger-link">Contact Us</Link>,
            ];
            setLinks(options);
        }
    }
    filterForUser()
},[currentUser, handleLogout, classes.button])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="link-bar">
            <MenuIcon
                aria-label="more"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon className="menu-icon" />
            </MenuIcon>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                    backgroundColor: '#f8f7ff',
                    color: '#1d7dc2',
                },}}>
                {links?.map((option, index) => (
                <MenuItem key={index} selected={option === 'Pyxis'} onClick={handleClose}>
                    <div className="mobile-nav-text">{option}</div>
                </MenuItem>
                ))}
            </Menu>
        </div>
    );
}