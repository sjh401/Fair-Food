import { useState } from 'react'
import './Login.css'

export default function Register( {handleRegister} ) {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: ''
    })
    const { username, password, email } = formData

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
            handleRegister(formData)
        }}>
            <h3 className="login-register">Register</h3>
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
                Email:
                <input 
                    type="email"
                    name="email"
                    value={email}
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
            <button>Submit</button>
        </form>
    )
}
