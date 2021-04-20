// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - usersService.js
// April 18, 2021
// Last Edited (Initials, Date, Edits):

// Importing axios
import axios from 'axios';

// This request will retrieve all of the users in the 
// database
async function getAll() {
  let res = await axios.get(`/api/users`);
  return res.data || [];
}

// This request will delete a user based off of the 
// required id
async function deleteUser(id) {
  let result = await axios.delete(`/api/users/${id}`)
    .then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });
  return result
}

// async function getUserByUid(userId) {
//   let res = await axios.get(`/api/users/${userId}`);
//   console.log(userId)
//   return res.data || [];
// }

// This request will retrieve a user if the userId matches
async function getUserByUid(userId) {
  let res = await axios.get(`/api/users`, {params:
    {userId}});
  // DEBUG
  // console.log(userId)
  return res.data || [];
}

// async function loginUser(userId, password) {
//   let res = await axios.get(`/api/users/${userId}/${password}`);
//   return res.data || [];
// }

// This request will log a user in with the loginInfo 
// object params
async function loginUser(loginInfo) {
  let res = await axios.get(`/api/users`, {params:
    loginInfo})
  // DEBUG
  // console.log(loginInfo)
  return res.data || [];
}

// This request will add a user to the database using the 
// user object with user data
async function addUser(user) {
  let result = await axios.post(`/api/users`, user)
    .then((res) => {
      console.log("User Added Successfully")
      // DEBUG
      // console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });
  return result
}

// Exporting all user services
export {getAll, getUserByUid, deleteUser, addUser, loginUser};