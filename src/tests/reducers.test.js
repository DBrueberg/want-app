// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - reducer.test.js
// April 25, 2021
// Last Edited (Initials, Date, Edits):

// Importing in needed modules/files
import {user} from '../reducers';
import C from '../constants';
import deepFreeze from 'deep-freeze';

// Testing the user reducers with Jest and deep-freeze.
// ADD_USER, USER_LOG_IN, and USER_LOG_OUT are the only reducers 
// used currently in the application and are all tested here.
describe("user Reducer", () => {

  // Testing ADD_USER for correct output and non mutating state
  it("ADD_USER success", () => {
    const state = {}
    const action = {
      type: C.ADD_USER,
      id: 0,
      firstName: "First Name",
      lastName: "Last Name",
      userId: "testUser12",
      password: "testPW",
      access: "admin"
    }
    // deepFreeze will throw an error if the state is mutated
    deepFreeze(state)
    deepFreeze(action)
    const results = user(state, action)
    // expect will throw an error if the results do not match 
    // what is expected
    expect(results)
      .toEqual({
        id: 0,
        firstName: "First Name",
        lastName: "Last Name",
        userId: "testUser12",
        password: "testPW",
        access: "admin"
      })
  });

  // Testing that USER_LOG_IN behaves as expected
  it("USER_LOG_IN success", () => {
    const state = {
      id: 0,
      firstName: "First Name",
      lastName: "Last Name",
      userId: "testUser12",
      password: "testPW",
      isLoggedIn: false,
      access: "admin"
    }
    const action = {
      type: C.USER_LOG_IN
    }
    // deepFreeze will throw an error if the state is mutated
    deepFreeze(state)
    deepFreeze(action)
    const results = user(state, action);
    // expect will throw an error if the results do not match 
    // what is expected
    expect(results) 
      .toEqual({
        ...state,
        isLoggedIn: true
      })
  });

  // Testing that USER_LOG_OUT behaves as expected
  it("USER_LOG_OUT success", () => {
    const state = {
      id: 0,
      firstName: "First Name",
      lastName: "Last Name",
      userId: "testUser12",
      password: "testPW",
      isLoggedIn: true,
      access: "admin"
    }
    const action = {
      type: C.USER_LOG_OUT
    }
    // deepFreeze will throw an error if the state is mutated
    deepFreeze(state)
    deepFreeze(action)
    const results = user(state, action);
    // expect will throw an error if the results do not match 
    // what is expected
    expect(results) 
      .toEqual({
        ...state,
        isLoggedIn: false
      })
  });
});