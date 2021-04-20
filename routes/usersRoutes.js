// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - usersRoutes.js
// April 18, 2021
// Last Edited (Initials, Date, Edits):

// Calling the mongoose modules needed to work with the users
// collection/model
const mongoose = require('mongoose');
const Users = mongoose.model('users');

// All modules will make the appropriate express call to the 
// mongodb
module.exports = (app) => {

  // This will query the mongodb database using params. The 
  // params are retrieved through req.query. This module is 
  // good for single a multiple db queries
  app.get(`/api/users`, async (req, res) => {
    // Executing the mongoose db query
    let users = await Users.find(req.query);
    // DEBUG
    // console.log("Running general users")
    // console.log(req.query)
    return res.status(200).send(users);
  });

  // This will create new entries in the database. Pass all 
  // data from the axios userServices as the second get param 
  // and retrieve them here in req.body
  app.post(`/api/users`, async (req, res) => {
    // Executing the mongoose db query
    let user = await Users.create(req.body);
    // DEBUG
    // console.log("Req body")
    // console.log(req.body)
    return res.status(201).send({
      error: false,
      user
    })
  })

  // This will find a user by ID and update with the provided 
  // req.body data. The id is retrieved from being passed as a 
  // req.params from the axios service
  app.put(`/api/users/:id`, async (req, res) => {
    // Destructuring out id from req.params
    const {id} = req.params;

    // Executing the mongoose db query
    let users = await Users.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      users
    })

  });

  // This will find a user by ID and delete the user. 
  // The id is retrieved from being passed as a 
  // req.params from the axios service
  app.delete(`/api/users/:id`, async (req, res) => {
    // Destructuring out id from req.params
    const {id} = req.params;

    // Executing the mongoose db query
    let users = await Users.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      users
    })

  })
}