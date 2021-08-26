import { useState } from "react"
import { Link } from "react-router-dom"
import './Login.css'

export default function Login( {handleLogin} ) {
    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleLogin(formData)
        }}>
            <h3 className="login-register">Login</h3>
            <label>
                Username:
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label>
                Password:
                <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <Link to="/register">Register</Link>
            <button>Submit</button>
        </form>
    )
}