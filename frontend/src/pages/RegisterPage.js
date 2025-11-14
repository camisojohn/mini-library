import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../styles/Auth.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user" });
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await API.post("/auth/register", formData);
        alert("Registration successful!");
        navigate("/login");
        } catch (err) {
        alert(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <select name="role" onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            </select>
            <button type="submit">Register</button>
        </form>
        </div>
    );
};

export default RegisterPage;
