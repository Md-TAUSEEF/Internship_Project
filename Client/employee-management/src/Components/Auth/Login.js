import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import "./Login.css";
export default function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user), // Ensure you're sending the correct data
            });
    
            console.log("response data: ", response);
    
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                alert("Login successful");
                setUser({ email: "", password: "" }); // Clear form data
                navigate("/emplyelist");
            } else {
                const errorData = await response.json();
                console.error("Error inside response: ", errorData.msg);
                alert(errorData.msg);
            }
        } catch (error) {
            console.error("Error", error);
            alert("An error occurred. Please try again.");
        }
    }
    

    return (
        <div className='loginpage'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    placeholder='Enter email id here'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    placeholder='Enter password here'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <button type='submit'>Submit</button>
                <p>If you are a new user, please
                    <NavLink to="/register">
                        <span> Register Here</span>
                    </NavLink>
                </p>
            </form>
        </div>
    );
}
