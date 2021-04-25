// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - store.test.js
// April 25, 2021
// Last Edited (Initials, Date, Edits):

// Importing in needed modules/files
import {addNewUser, userLogIn} from '../actions';
import storeFactory from '../store';

// Testing the state updating for the user actions
describe("addUser", () => {
    // Creating a store and an initial user
    let store;
    const user = {
        id: 0,
        firstName: "First Name",
        lastName: "Last Name",
        userId: "testUser1",
        password: "testPassword1",
        isLoggedIn: false,
        access: "general"
    }

    // Before running any tests the store is created and 
    // a new user is added
    beforeAll(() => {
        store = storeFactory({user});
        store.dispatch(addNewUser(2,
        "First Name2",
        "Last Name2",
        "testUser2",
        "testPassword2",
        "admin"));
        // A new log in status is updated as well
        store.dispatch(userLogIn())
    });


    // Testing that the state did update correctly

    // Did firstName update correctly?
    it("should change firstName", () => 
        expect(store.getState().user.firstName).toBe("First Name2"));

    // Did lastName update correctly?
    it("should change lastName", () => 
        expect(store.getState().user.lastName).toBe("Last Name2"));

    // Did userId update correctly?
    it("should change userId", () =>
        expect(store.getState().user.userId).toBe("testUser2"));

    // Did password update correctly?
    it("should change password", () =>
        expect(store.getState().user.password).toBe("testPassword2"));

    // Did access update correctly?
    it("should change access", () =>
        expect(store.getState().user.access).toBe("admin"));

    // Did isLoggedIn update correctly?
    it("should change log in", () =>
        expect(store.getState().user.isLoggedIn).toBe(true));
})