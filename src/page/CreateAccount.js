// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - CreateAccount.js
// March 28, 2021
// Last Edited (Initials, Date, Edits):
// DAB, 04/18/2021, Added functionality as well as 
//  database access. The user can now add a user to 
//  the database if it is a unique userId. 
//  Added the ability to choose admin/general user 
//  for creation.

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import {Button} from '@material-ui/core';
import '../stylesheet/CreateAccount.css';
import {getUserByUid, addUser} from '../services/usersService';
import axios from 'axios';

// The CreateAccount Component will allow the user to create a 
// user account and save it to the database
class CreateAccount extends React.Component {
    // Constructor that will create a CreateAccount Component
    constructor(props) {
        super(props);
        // Initializing the components state
        this.state = {
            firstName: "",
            lastName: "",
            userId: "",
            password: "",
            access: "general", 
            isChecked: false
        }

        // Binding all methods
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.checkedHandler = this.checkedHandler.bind(this);
        this.addNewUser = this.addNewUser.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    // The changeHandler will change the form entries and set 
    // the input to state
    changeHandler = (event) => {
        // Preventing the default action to occur
        event.preventDefault();

        // Deconstructing values and setting the state
        let {name, value} = event.target;
        this.setState({[name]: value});
    }

    // The checkedHandler will specifically take care of the checkbox.
    // It will save both the value of the checkbox in state and check and 
    // uncheck the box accordingly
    checkedHandler = (event) => {
        // Deconstructing values from the event.target
        let {name, value, checked} = event.target;

        // Switching the check to the current opposite and setting the 
        // state
        this.setState({isChecked: !this.state.isChecked})

        // If the box is checked the checked value will be saved in 
        // state
        if (checked === true) {
            this.setState({[name]: value});
        }
        // Else the general access level will be saved in state
        else {
            this.setState({[name]: "general"})
        }
    }

    // The submitHandler will handle the submissions. The default action
    // will be prevented
    submitHandler = (event) => {
        // Preventing default action
        event.preventDefault();
        // Deconstructing the needed variables from state and this
        const {addNewUser} = this;
        
        // Calling the async addNewUser() method to add a new user to the 
        // database
        addNewUser();
    }


    // The addNewUser async method will check if the userId already exists in the
    // database. If the userId does not, a new user will be created and added 
    // to the database
    addNewUser = async () => {
        // Deconstructing the variables needed to add a new user and clear the 
        // form upon successful database addition
        const {firstName, lastName, userId, password, access} = this.state;
        const {resetForm} = this;

        // Calling the getUserByUid method that will check if a user is in the 
        // database with the provided userId
        let isUser = await getUserByUid(userId);

        // If the userId was not found in the database, the new user will 
        // be added
        if (!(isUser.length > 0)) {
            // Initializing the variable that will hold the addUser query
            let userData = {
                firstName: firstName,
                lastName: lastName,
                userId: userId,
                password: password,
                access: access
            };

            // Calling the addUser method to add the user to the database
            let res = await addUser(userData);

            console.log(`${userId} added to database!`)
            // The new user is added so the form is reset
            resetForm();
        }
        // Else the userId is a duplicate so the user is not added
        else {
            console.log(`${userId} not added to database!`)
            alert(`${userId} is a duplicate userId, please try another`)
        }
    }

    // This function will reset the form entries
    resetForm() {
        // Resetting the form state
        document.getElementById("createAccountForm").reset();
        this.setState({
            firstName: "",
            lastName: "",
            userId: "",
            password: "",
            access: "general",
            isChecked: false
        });
    }

    render() {
        // Destructuring out the needed variables for easy reference
        const {submitHandler, changeHandler, checkedHandler, resetForm} = this;
        const {firstName, lastName, userId, password, access, isChecked} = this.state;

        return (
            <div className="CreateAccount">

                {/* The createAccountForm will create a new user account */}
                <form onSubmit={submitHandler} id="createAccountForm">
                    <fieldset>
                        
                        <legend>
                            Create Account
                        </legend>

                        {/* The firstName input container */}
                        <div className="createAccountInput">
                            <label htmlFor="formCAFirstName">
                                First Name
                            </label>
                            <input type="text" id="formCAFirstName" name="firstName" 
                            value={firstName} onChange={changeHandler}  required />
                        </div>

                        {/* The lastName input container */}
                        <div className="createAccountInput">
                            <label htmlFor="formCALastName">
                                Last Name
                            </label>
                            <input type="text" id="formCALastName" name="lastName" 
                            value={lastName} onChange={changeHandler}  required />
                        </div>

                        {/* The userId input container */}
                        <div className="createAccountInput">
                            <label htmlFor="formCAUserId">
                                User Id
                            </label>
                            <input type="text" id="formCAUserId" name="userId" 
                            value={userId} onChange={changeHandler} required />
                        </div>

                        {/* The password input container */}
                        <div className="createAccountInput">
                            <label htmlFor="formCAPassword">
                                Password
                            </label>
                            <input type="password" id="formCAPassword" name="password" 
                            value={password} onChange={changeHandler}  required />
                        </div>

                        {/* This button will submit the form */}
                        <Button type="submit" variant="contained" aria-label="Submit">
                            Submit
                        </Button>

                        {/* The isAdmin checkbox container */}
                        <div className="isAdmin">
                            <label htmlFor="formIsAdmin">
                                Admin Account
                            </label>
                            <input type="checkbox" id="formIsAdmin" name="access" checked={isChecked}
                            value="admin" onChange={checkedHandler}></input>
                        </div>

                    </fieldset>
                </form>
            </div>
            
        )
    }
}

// Exporting the CreateAccount Component
export default CreateAccount;