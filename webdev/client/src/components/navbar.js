import React from 'react';
import Auth from "../../utils/auth";



function Navbar() {

function showNavigation() {
    if (Auth.loggedIn()) {
        return (
            <ul className="flex-row">
                <li className="mx-1">
                
                </li>
            </ul>
        )
    }
}
}