// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
// Run the server
// node comment.js
// Open a browser and go to http://localhost:3000
// You should see "Hello World!" on the screen
// Press Ctrl-C to stop the server