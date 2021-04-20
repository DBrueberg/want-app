// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - Login.js
// March 12, 2021
// Last Edited (Initials, Date, Edits):
// DAB - March 12, 2021 - Added changeHandler and states/ 
// converted the Login function to a Login Class
// DAB, 03/28/2021, Changed button stylings and added a new 
//  "create account" Button
// DAB, 04/18/2021, Added mongodb calls that can log a user in
//  and change the current redux user state

// Importing React states to save variables
import React from 'react';
import {Button} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {loginUser} from '../services/usersService';
import {connect} from 'react-redux';
import {addNewUser, userLogIn} from '../actions';
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
        this.loginValidator = this.loginValidator.bind(this);
    }


    // This function handles all of the submissions
    submitHandler = (event) => {
        // Defining the methods/variables used in this function
        const {loginValidator} = this;
        // Preventing the default method from firing
        event.preventDefault();
        
        // Calling the async loginValidator to make a call to the db 
        // and check for valid input
        loginValidator()
    }


    // This async function will check the database to see if the inputted 
    // login data matches a user in the database. If there is a match, the 
    // redux user state is updated with the current users info and they 
    // are set as loggedIn
    loginValidator = async() => {
        // Defining the methods/variables used in this function
        const {userId, password} = this.state;
        // Defining mongodb search parameters 
        let loginInfo = {
            userId: userId,
            password: password
        }

        // Calling the loginUser productRoute to query the 
        // database for the inputted user
        let res = await loginUser(loginInfo);
        
        // If there was a match found, the user data is set in the 
        // redux user and the current user is loggedIn
        if (res.length > 0) {
            // Deconstructing the redux data from this.props
            const {onNewUser, user, onLogIn} = this.props;
            // Prepping the data in the response to change the 
            // redux user state
            const {_id: id, 
                firstName, 
                lastName, 
                userId: newUserId, 
                password: newPassword, 
                access} = res[0];

            // Calling the onNewUser action to update the user in the 
            // redux state to the newly logged in one
            onNewUser( id, 
                firstName, 
                lastName, 
                newUserId, 
                newPassword, 
                access);

            // Calling the onLogIn action to log the current user in
            onLogIn();

            // Clearing the Login form since the log in was successful
            this.setState({
                userId: "",
                password: ""
            })

            // Logging the log in
            console.log(`${userId} is logged in.`);
        } 
        // If user is not logged in
        else {
            console.log(`Could not log ${userId} in.`);
        } 
    }


    // This function changes the objects states upon a change
    changeHandler = (event) => {
        // Defining the methods/variables used in this function
        let {name, value} = event.target;

        // Setting the new state for the form item
        this.setState({[name]: value}); 
    }

    // Rendering the class using JSX
    render() {
        const {submitHandler, changeHandler} = this;
        const {userId, password} = this.state;
        return (
            // The loginForm div
            <div className="Login"> 
                <form onSubmit={submitHandler}>
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
                            value={userId} onChange={changeHandler} required></input>
                        </div>
                        
                        {/* Form input for password */}
                        <div className="Login-input">
                            <label htmlFor="formLoginPassword">
                                Password
                            </label>
                            <input type="password" name="password" id="formLoginPassword" 
                            value={password} onChange={changeHandler} required></input>
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

// Mapping the redux store states to props
const mapStateToProps = state => 
    ({
        user: state.user
    });

// Mapping the state actions to props
const mapDispatchToProps = dispatch => 
    ({
        // This method will add a new user to the current state
        onNewUser(id, firstName, lastName, userId, password, access) {
            dispatch(addNewUser(id, firstName, lastName, userId, password, access))
        },
        // This method will log in the new user
        onLogIn() {
            dispatch(userLogIn())
        }
    });

// Exporting the connect Wrapped Login Component
export default connect(mapStateToProps, mapDispatchToProps)(Login);