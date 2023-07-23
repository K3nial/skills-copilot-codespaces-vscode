// Create web server
var express = require('express');
// Create an instance of express
var app = express();
// Create a route for the home page
app.get('/', function(req, res) {
    res.send('Welcome to the home page!');
});
// Create a route for /comments
app.get('/comments', function(req, res) {
    res.send('Welcome to the comments page!');
});
// Create a route for /skills
app.get('/skills', function(req, res) {
    res.send('Welcome to the skills page!');
});
// Create a route for /members
app.get('/members', function(req, res) {
    res.send('Welcome to the members page!');
});
// Start the server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});
