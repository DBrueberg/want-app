// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - CreateAccount.js
// March 28, 2021
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import {Button} from '@material-ui/core';
import '../stylesheet/CreateAccount.css';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userId: "",
            password: ""
        }

        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (event) => {
        event.preventDefault();
        let {name, value} = event.target;

        this.setState({[name]: value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        
        const {firstName, lastName, userId, password} = this.state;

        console.log(`${firstName} and ${lastName} and ${userId} and ${password}`)

    }
    render() {
        // Destructuring out the needed variables for easy reference
        const {submitHandler} = this;
        const {firstName, lastName, userId, password} = this.state;

        return (
            <div className="CreateAccount">

                <form onSubmit={submitHandler}>
                    <fieldset>
                        
                        <legend>
                            Create Account
                        </legend>

                        <div className="createAccountInput">
                            <label htmlFor="formCAFirstName">
                                First Name
                            </label>
                            <input type="text" id="formCAFirstName" name="firstName" 
                            value={firstName} onChange={this.changeHandler}  required />
                        </div>

                        <div className="createAccountInput">
                            <label htmlFor="formCALastName">
                                Last Name
                            </label>
                            <input type="text" id="formCALastName" name="lastName" 
                            value={lastName} onChange={this.changeHandler}  required />
                        </div>

                        <div className="createAccountInput">
                            <label htmlFor="formCAUserId">
                                User Id
                            </label>
                            <input type="text" id="formCAUserId" name="userId" 
                            value={userId} onChange={this.changeHandler} required />
                        </div>

                        <div className="createAccountInput">
                            <label htmlFor="formCAPassword">
                                Password
                            </label>
                            <input type="password" id="formCAPassword" name="password" 
                            value={password} onChange={this.changeHandler}  required />
                        </div>

                        {/* This button will submit the form */}
                        <Button type="submit" variant="contained" aria-label="Submit">
                            Submit
                        </Button>

                    </fieldset>
                </form>
            </div>
            
        )
    }
}

export default CreateAccount;