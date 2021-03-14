// Devin Brueberg
// CSC435 Adv Web App Development
// Assignment 1 - Footer.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and import needed components
import React from 'react';
import './Footer.css';

// The Footer component holds the Footer standard footer layout for 
// all the application pages
function Footer() {

    // Returning the JSX written Footer component wrapped in a div
    return (
        <div className="Footer">
            {/* The footer logo wrapped in a div */}
            <div className="Footer-logo">
                <img src="wantThumb.jpeg" alt="Want Logo"></img>
                <span>You WANT it, we have it.</span>
            </div>
        </div>
    );
}

// Exporting the Footer component
export default Footer;