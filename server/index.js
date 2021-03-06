// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - server/index.js
// April 18, 2021
// Last Edited (Initials, Date, Edits):

// Importing modules needed to run proxy server
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import models
require('../models/product');
require('../models/users')

// Initializing express
const app = express();

// Connecting to mongoose and enabling global.Promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/applicationdb`,
{useNewUrlParser: true, useUnifiedTopology: true});

// Express will use the bodyParser.json
app.use(bodyParser.json());

// Import routes
require('../routes/productRoutes')(app);
require('../routes/usersRoutes')(app)

// Allows express to look up directories using static
if (process.env.NODE_ENV === 'production') {
  // Here is where you include the build path of the static app
  app.use(express.static('build'));

  // Initializing the path
  const path = require('path');

  // A template for all get requests filenames, set to link to the 
  // index.html after the build
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })

}

// The proxy server will run on port 5000
const PORT = process.env.PORT || 5000;

// Listening to the port
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});