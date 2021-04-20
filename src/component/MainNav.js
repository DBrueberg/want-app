// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - MainNav.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 04/11/2021, Changed the explicitly passed 
//  cartCount to the useContext(CartCounter) hook
// DAB, 04/19/2021, Added Redux state to component.
//  Login/logout now changes based off if user is 
//  logged in or out

// Using React library in order to build components 
// for the app and import needed components
import React, {useContext} from 'react';
import '../stylesheet/MainNav.css';
import {NavLink} from 'react-router-dom'
// Child Search component
import Search from './Search';
import {connect} from 'react-redux';
import {userLogOut} from '../actions';
import {CartCounter} from '../component/PageTemplate'


// The MainNav component is the standard main navigation of the application
function MainNav(props) {
    // Using the hook useContext calculated in the PageTemplate page to retrieve 
    // the cart length
    const cartCount = useContext(CartCounter);
    // Destructuring user state from Redux
    const {user, onLogOut} = props;

    // Log in display. Clicking will navigate 
    // the the login page
    const displayLogInNav = 
        <li>
            <NavLink to='/login'>
                Log In
            </NavLink>
        </li>

    // Log out display. On click will log the user 
    // out
    const displayLogOut = 
        <li onClick={() => onLogOut()}>
            <span className="mimicLink">
                Log Out
            </span>
        </li>

    // Will display either log in or log out display
    const displayLogIn = !user.isLoggedIn ? 
        displayLogInNav : displayLogOut;


    return (
        <nav className="MainNav">
            {console.log("LOGGED IN")}
            {console.log(user.isLoggedIn)}
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
                {displayLogIn}

            </ul>

        </nav>
    );
}


// Mapping the redux store states to props
const mapStateToProps = state => 
    ({
        user: state.user
    });

// Mapping the state actions to props
const mapDispatchToProps = dispatch => 
    ({
        // This method will add a new invoice to invoices
        onLogOut() {
            dispatch(userLogOut())
        }
    })


// Exporting the connect Wrapped MainNav Component
export default connect(mapStateToProps, mapDispatchToProps)(MainNav);