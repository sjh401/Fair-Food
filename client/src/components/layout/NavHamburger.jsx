import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from '@material-ui/core/Fade'

export const navHamburgerCSS = makeStyles((theme) => ({
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
    },
    buttonDark: {
        backgroundColor: '#3e885b',
        margin: '2px',
        '&:hover': {
            backgroundColor: '#498467',
            color: '#d4cdc3'
        },
    },
    linkDark: {
        color: '#3e885b',
        textDecoration: 'none',
    },
    linkBarDark: {
        color: '#d4cdc3',
        marginRight: 20,
        width: 50,
    }
}));

export default function NavHamburger(props) {
    const thingy = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [ links, setLinks ] = useState([])
    const  { handleLogout, currentUser, darkMode } = props; 

    const open = Boolean(anchorEl);

    const classes = navHamburgerCSS();

    useEffect(() => {
    const filterForUser = () => {
        if(currentUser) {
            const options = [
                <div>Welcome, {currentUser.username}!</div>,
                <Link to="/" className={(darkMode === true) ? classes.linkDark: classes.link}>Home</Link>,
                <Link to="/locations" className={(darkMode === true) ? classes.linkDark: classes.link}>Locations</Link>,
                <Link to="/about" className={(darkMode === true) ? classes.linkDark: classes.link}>About</Link>,
                <Link to="/contact" className={(darkMode === true) ? classes.linkDark: classes.link}>Contact Us</Link>,
                <Button variant="contained" color="primary" className={(darkMode === true) ? classes.buttonDark : classes.button} onClick={handleLogout}>Logout</Button>
            ];
            setLinks(options);
        } else {
            const options = [
                <div>Welcome!</div>,
                <Link to="/" className={(darkMode === true) ? classes.linkDark: classes.link}>Home</Link>,
                <Link to="/login" className={(darkMode === true) ? classes.linkDark: classes.link}>Login/Register</Link>,
                <Link to="/locations" className={(darkMode === true) ? classes.linkDark: classes.link}>Locations</Link>,
                <Link to="/about" className={(darkMode === true) ? classes.linkDark: classes.link}>About</Link>,
                <Link to="/contact" className={(darkMode === true) ? classes.linkDark: classes.link}>Contact Us</Link>,
            ];
            setLinks(options);
        }
    }
    filterForUser()
     // eslint-disable-next-line
},[currentUser, handleLogout, darkMode])

    const handleClick = () => {
        setAnchorEl(thingy.current);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={(darkMode === true) ? classes.linkBarDark : classes.linkBar}>
            <MenuIcon
                aria-label="more"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
                ref={thingy}
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
                className={(darkMode === true) ? classes.menuDark : classes.menu}
                PaperProps={{
                    style: {
                    maxHeight: 450,
                    width: '15vw',
                    minWidth: 250,
                    backgroundColor: (darkMode === true) ? '#02111B':'#f8f7ff',
                    color: (darkMode === true) ? '#3e885b':'#1d7dc2',
                },}}
                >
                {links?.map((option, index) => (
                <MenuItem key={index} selected={option === 'Pyxis'} onClick={handleClose}>
                    <div className="mobile-nav-text">{option}</div>
                </MenuItem>
                ))}
            </Menu>
        </div>
    );
}