// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - users.js
// April 18, 2021
// Last Edited (Initials, Date, Edits):

// Calling the mongoose modules needed to create and use the 
// Schema
const mongoose = require('mongoose');
const {Schema} = mongoose;

// Creating a schema for users in the database
let usersSchema = new Schema({
    firstName: String,
    lastName: String,
    userId: String,
    password: String,
    access: String
});

// Exporting users Schema
mongoose.model('users', usersSchema);