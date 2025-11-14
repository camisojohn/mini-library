import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../styles/App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
        <nav className="navbar">
        <h2 className="title"> Mini Library</h2>
        <div>
            {user ? (
            <>
                <Link to="/books">Books</Link>
                {user.role === "admin" && <Link to="/add-book">Add Book</Link>}
                <button onClick={logout}>Logout</button>
            </>
            ) : (
            <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </>
            )}
        </div>
        </nav>
    );
};

export default Navbar;
