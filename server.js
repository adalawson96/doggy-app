const express = require ('express');
const app = express();
const port = 3000;


// CRUD routes RESTful

// GET all dogs
app.get('/dogs', (req, res) => {
    res.send('hello world');
});

// POST create a dog
app.post('/dogs', (req, res) => {
    res.send('this is the POST route for dogs');
});

// GET one dog
app.get ('/dogs/:id', (req, res) => {
    res.send('this is the GET route for one dog');
});

// PUT  one dog
app.put ('/dogs/:id', (req, res) => {
    res.send('this is the PUT route for one dog');
});

// DELETE one dog 
app.delete('/dogs/:id', (req, res) => {
    res.send('this is the DELETE route for one dog');
});

app.listen(port, () => {
    console.log('you are connected to the port');
});