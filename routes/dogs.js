const express = require ('express');
const router = express.Router();


// CRUD routes RESTful

// GET all dogs
router.get('/', (req, res) => {
    res.send('hello world');
});

// POST create a dog
router.post('/', (req, res) => {
    res.send('this is the POST route for dogs');
});

// GET one dog
router.get ('/:id', (req, res) => {
    res.send('this is the GET route for one dog');
});

// PUT  one dog
router.put ('/:id', (req, res) => {
    res.send('this is the PUT route for one dog');
});

// DELETE one dog 
router.delete('/:id', (req, res) => {
    res.send('this is the DELETE route for one dog');
});

// this line makes it available to us
module.exports = router;