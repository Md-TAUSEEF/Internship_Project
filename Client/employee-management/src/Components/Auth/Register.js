import React, { useState } from 'react';
import "./Register.css";
import { NavLink } from 'react-router-dom';
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            console.log("response data: ", response);

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                alert("Registration successful");
                setFormData({ name: "", email: "", password: "" });
            } else {
                console.log("Error inside response");
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder='Please enter your name'
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder='Please enter your email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        placeholder='Please enter your password'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
                <p>If you are already registered, 
                    <NavLink to="/">
                        <span> Click Here.</span>
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default Register;
