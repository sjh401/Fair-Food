import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade'

const ITEM_HEIGHT = 100;

export default function NavHamburger(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [ links, setLinks ] = useState([])
    const  { handleLogout, currentUser } = props; 
    const open = Boolean(anchorEl);

    useEffect(() => {
    const filterForUser = () => {
        if(currentUser) {
            const options = [
                <div>Welcome, {currentUser.username}!</div>,
                <Link to="/">Home</Link>,
                <Link to="/locations">Locations</Link>,
                <Link to="/about">About</Link>,
                <Link to="/contact">Contact Us</Link>,
                <button onClick={handleLogout}>Logout</button>
            ];
            setLinks(options);
        } else {
            const options = [
                <div>Welcome!</div>,
                <Link to="/">Home</Link>,
                <Link to="/login">Login</Link>,
                <Link to="/register">Register</Link>,
                <Link to="/locations">Locations</Link>,
                <Link to="/about">About</Link>,
                <Link to="/contact">Contact Us</Link>,
            ];
            setLinks(options);
        }
    }
    filterForUser()
},[currentUser, handleLogout])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="link-bar">
        <IconButton
            aria-label="more"
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon className="icon-color" />
        </IconButton>
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