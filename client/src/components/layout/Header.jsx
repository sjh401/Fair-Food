import NavHamburger from '../layout/NavHamburger';

import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import './Layout.css'
import React from 'react';

const CustomSwitch = withStyles({
    switchBase: {
        color: '#d4cdc3',
        '&$checked': {
            color: '#498467',
        },
        '&$checked + $track': {
            color: '#3E885B',
            backgroundColor: '#3E885B',
        },
        },
        checked: {},
        track: {

        },
})(Switch);

const Header = React.forwardRef((props, dark) => {
    const { currentUser, handleLogout, darkMode, setDarkMode } = props;

    const handleChange = (e) => {
        e.preventDefault();
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    
    return (
        <header className={(darkMode === true) ? "header-dark": "header"}>
            <CustomSwitch 
                onChange={handleChange}
                ref={dark}
            />
            <h1 className={(darkMode === true) ? "project-title title-dark" : "project-title"}>Destination Hot Dog</h1>
            <NavHamburger 
                handleLogout={handleLogout}
                currentUser={currentUser}
                darkMode={darkMode}
            />
        </header>
    )
})

export default Header
