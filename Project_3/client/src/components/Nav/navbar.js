import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './navbar.css';


function Navbar() {

function showNavigation() {
    //replace with firebase authentication
    if (Auth.loggedIn()) {
        return (
            <ul className="flex-row">
                <li className="profile-link">
                <Link to="/myprofile">
                    My Profile
                </Link>
                </li>
                <li className="navLinks">
                    <a href="/" onClick={() => Auth.logout()}>
                        Logout
                    </a>
                </li>
            </ul>
        );
    } else {
        return (
            <ul className="flex-row">
                <li className='navLinks'>
                    <Link to='/myprofile'>
                        My Profile
                    </Link>
                </li>
                <li className="navLinks">
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
        <h1 className="navTitle">
        <Link to="/">
        <span>[closing brackets]</span>
        </Link>
        </h1>
        
        <nav>
            {showNavigation()}
        </nav>
    </header>
);
}

export default Navbar;