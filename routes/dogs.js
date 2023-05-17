const express = require ('express');
const router = express.Router();
const dogController = require('../controllers/dogs');

// CRUD routes RESTful
// GET all dogs
router.get('/', dogController.getAllDogs);

// POST create a dog
router.post('/', dogController.createDog)

// GET one dog
router.get ('/:id', dogController.getOneDog) 

// PUT  one dog
router.put ('/:id', dogController.updateADog)

// DELETE one dog 
router.delete('/:id', dogController.removeADog)

// this line makes it available to us
module.exports = router;