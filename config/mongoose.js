//Import the mongoose module
const mongoose = require('mongoose');

//connect to MongoDB
mongoose.connect('mongodb://localhost/codeial_development');

//Get the connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;