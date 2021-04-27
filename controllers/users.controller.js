const db = require("../models");
const Users = db.users;

// Create and Save a new User
exports.create = (req, res) => {

    console.log(req.body);
    // Create a User
    const user = new Users({

        name: req.body.username,
        password: req.body.password
    });

    // Save User in the database
    user
        .save(user)
        .then(data => {
            res.json({ data })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Users."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    Users.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {

};

// Update a User by the id in the request
exports.update = (req, res) => {

};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Users
exports.findAllPublished = (req, res) => {

};