import { Link } from 'react-router-dom'
import './Layout.css'

export default function Header(props) {
    const { currentUser, handleLogout } = props;

    return (
        <header>
            <nav>
                <h1 className="project-title">Destination Hot Dog</h1>
                {currentUser ? (
                <div>
                    <div>{currentUser.username}</div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : <Link to="/login">Login/Register</Link> }
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}
