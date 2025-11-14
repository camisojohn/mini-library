import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BooksPage from "./pages/BooksPage";
import AddBookPage from "./pages/AddBookPage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles/App.css";

function App() {
    return (
        <Router>
        <Navbar />
        <div className="app-container">
            <Routes>
            <Route path="/" element={<Navigate to="/books" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
                path="/books"
                element={
                <ProtectedRoute>
                    <BooksPage />
                </ProtectedRoute>
                }
            />
            <Route
                path="/add-book"
                element={
                <ProtectedRoute adminOnly>
                    <AddBookPage />
                </ProtectedRoute>
                }
            />
            </Routes>
        </div>
        </Router>
    );
}

export default App;
