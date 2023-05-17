const Dog = require('../models/dog')

const getAllDogs = async (req, res) => {
    try {
        let allDogs = await Dog.find({});
        res.json(allDogs);
    } catch {
        res.json({ msg: 'there was a problem getting all the dogs'})
    }
};

const createDog = async (req, res) => {
    try {
        let newDog = await Dog.create(req.body)
        res.json(newDog);
    } catch {
        res.json({ msg: 'There was an error making your dog'});
    }
};

const getOneDog = async (req, res) => {
    try {
        let dog = await Dog.findById(req.params.id)
    } catch {
        res.json({ msg: 'there was an error getting your dog'})
    }
    res.send('this is the GET route for one dog');
};

const updateADog = async (req, res) => {
    try {
        let updatedDog = await Dog.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name}}, { new : true})
        res.json(updatedDog)
    } catch {
        res.json({ msg: ' there was a problem updating your dog'})
    }
};

const removeADog = async (req, res) => {
    try {
        let adoptedDog = await Dog.findByIdAndDelete(req.params.id);
        res.json({ msg: 'your dog has been successfully adopted'});
    } catch {
        res.json({ msg: ' there was an error deleting your dog'});
    }
};

module.exports = {
    getAllDogs,
    createDog,
    getOneDog,
    updateADog,
    removeADog

}