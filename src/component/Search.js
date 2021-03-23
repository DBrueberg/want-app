// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Search.js
// March 14, 2021
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import '../stylesheet/Search.css';

// The search function will search the products for the entered data
// ****IDEA IS SEARCH WILL USE THE DATA TO SEARCH THE PRODUCT DATA IN ORDER 
// TO DISPLAY THAT DATA ON THE PAGE BELOW THE MAIN NAV*****
function Search() {

    return (
        // Basic search component wrapped in an li. Not functional yet
        <li>
            {/* This will be its own Search Component. Still researching hooks vs 
            class and how it will fall together with the rest of the project */}
            <label className="Search-hidden" htmlFor="searchBar">Search</label>
            <input type="text" name="searchBar" id="searchBar" placeholder="Search"></input>
            <input type="submit" className="Search-submit" value="Search"></input>
        </li>
        
    );
}

// Exporting the Search component
export default Search;