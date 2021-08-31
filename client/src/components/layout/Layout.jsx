import { useRef, useState } from 'react';
import Footer from './Footer'
import Header from './Header'
import './Layout.css'

export default function Layout(props) {
    const [ darkMode, setDarkMode ] = useState(false);
    const dark = useRef()
    console.log(dark)
    return (
        <>
            <Header 
                currentUser={props.currentUser} 
                handleLogout={props.handleLogout}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                ref={dark}
            />
            <main 
                className={(darkMode === true) ? "layout-main main-dark": "layout-main"}
            >
                {props.children}
                
            </main>
            <Footer                 
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
        </>
    )
}
