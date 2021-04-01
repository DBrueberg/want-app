// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - MainNav.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and import needed components
import React from 'react';
import '../stylesheet/MainNav.css';
import {NavLink} from 'react-router-dom'
// Child Search component
import Search from './Search';


// The MainNav component is the standard main navigation of the application
function MainNav({cartCount}) {


    return (
        <nav className="MainNav">
            {/* The main logo of the WANT application */}
            <div id="MainNav-logo">
                <img src="wantThumb.jpeg" alt="Want Logo"></img>
            </div>
            
            <ul className="MainNav-menu">
                {/* Home will take the user to the main page that will display key products */}
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                {/* Search component will allow an inventory product search */}
                <Search />
                {/* Cart component will allow the user to view and edit the cart. The li will 
                display the current number of items in the cart */}
                <li>
                    <NavLink to='/cart'>
                        Cart{cartCount}
                    </NavLink>
                </li>
                {/* This component will swap between login/logout depending on if the user
                is logged in or not */}
                <li>
                    <NavLink to='/login'>
                        Login/Logout
                    </NavLink>
                    
                </li>
            </ul>
        </nav>
    );
}

// Exporting the MainNav component
export default MainNav;