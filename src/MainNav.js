// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - MainNav.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and import needed components
import React from 'react';
import './MainNav.css';
// Child Search component
import Search from './Search';

// The MainNav component is the standard main navigation of the application
function MainNav() {

    return (
        <nav className="MainNav">

            {/* The main logo of the WANT application */}
            <div id="MainNav-logo">
                <img src="wantThumb.jpeg" alt="Want Logo"></img>
            </div>
            
            <ul className="MainNav-menu">
                {/* Home will take the user to the main page that will display key products */}
                <li>
                    Home
                </li>
                {/* Search component will allow an inventory product search */}
                <Search />
                <li>
                    Cart
                </li>
                {/* This component will swap between login/logout depending on if the user
                is logged in or not */}
                <li>
                    Login/Logout
                </li>
            </ul>
        </nav>
    );
}

// Exporting the MainNav component
export default MainNav;