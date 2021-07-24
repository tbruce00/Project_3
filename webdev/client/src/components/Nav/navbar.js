import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './../Nav/navbar.css';


function Navbar() {

function showNavigation() {
    if (Auth.loggedIn()) {
        return (
            <ul className="flex-row">
                <li className="navLinks mx-1">
                <Link to="/myProfile">
                    My Profile
                </Link>
                </li>
                <li className="navLinks mx-1">
                    <a href="/" onClick={() => Auth.logout()}>
                        Logout
                    </a>
                </li>
            </ul>
        );
    } else {
        return (
            <ul className="flex-row">
                <li className="navLinks mx-1">
                    <Link to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        );
    }
}

return (
    <header className="navBar flex-row px-1">
        <h1>
        <Link to="/">
        <span className="navTitle">[closing brackets]</span>
        </Link>
        </h1>
        
        <nav>
            {showNavigation()}
        </nav>
    </header>
);
}

export default Navbar;