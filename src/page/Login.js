// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Login.js
// March 12, 2021
// Last Edited (Initials, Date, Edits):
// DAB - March 12, 2021 - Added changeHandler and states/ 
// converted the Login function to a Login Class
// DAB, 03/28/2021, Changed button stylings and added a new 
//  "create account" Button

// Importing React states to save variables
import React from 'react';
import {Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
// Importing style sheet
import '../stylesheet/Login.css';

// Creating a class that will log the user in
class Login extends React.Component {
    // Constructor that will create a Login object
    constructor(props) {
        super(props);
        // This class's state includes the userId and password
        this.state = {
            userId: '', 
            password: ''
        }

        // Binding the objects methods to the specific object
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    // Validating the form. A form must have something entered before submission
    validateForm = () => {
        return this.state.userId.length > 0 && this.state.password.length > 0;
    }

    // This function handles all of the submissions
    submitHandler = (event) => {
        event.preventDefault();
        console.log("Submitting form");
        // If the form does not contain an entry an alert is popped
        if (!this.validateForm()) {
            alert("You need to enter a user name and password!")
        }
    }

    // This function changes the objects states upon a change
    changeHandler = (event) => {
        let {name, value} = event.target;

        // DEBUG
        // console.log(`${name} and ${value}`);
        // console.log(event.target);

        this.setState({[name]: value}); 

        // DEBUG
        // console.log(`${name} and ${value}`);    
        // console.log(`userId is ${this.state.userId}\npassword is ${this.state.password}`);
    }

    // Rendering the class using JSX
    render() {
        return (
            // The loginForm div
            <div className="Login"> 
                <form onSubmit={this.submitHandler}>
                    <fieldset>
                        {/* Form legend */}
                        <legend>
                            Sign in
                        </legend>

                        {/* Form input for user name */}
                        <div className="Login-input">
                            <label htmlFor="formLoginUserName">
                                User Id
                            </label>
                            <input type="text" name="userId" id="formLoginUserName" 
                            value={this.userId} onChange={this.changeHandler}></input>
                        </div>
                        
                        {/* Form input for password */}
                        <div className="Login-input">
                            <label htmlFor="formLoginPassword">
                                Password
                            </label>
                            <input type="password" name="password" id="formLoginPassword" 
                            value={this.password} onChange={this.changeHandler}></input>
                        </div>
                        
                        {/* This button will submit the form */}
                        <Button type="submit" variant="contained" aria-label="Sign in">
                            Sign in
                        </Button>

                        <NavLink to='/createAccount' style={{textDecoration: 'none'}}>
                            <Button variant="contained" className="LoginNewAccount" 
                            aria-label="Create account">
                                Create Account
                            </Button>
                        </NavLink>

                    </fieldset>
                </form>

                
            </div>
        );
    }
    
}

// Exporting the Login class component to be used elsewhere in the app
export default Login;