import NavHamburger from '../layout/NavHamburger';
import './Layout.css'

export default function Header(props) {
    const { currentUser, handleLogout } = props;

    return (
        <header>
            <div></div>
            <h1 className="project-title">Destination Hot Dog</h1>
            <NavHamburger 
                handleLogout={handleLogout}
                currentUser={currentUser}
            />
        </header>
    )
}
