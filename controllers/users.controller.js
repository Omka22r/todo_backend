const db = require("../models");
const Users = db.users;

function findUser(i) {
    console.log(i);
    Users.find({ name: i.name })
        .then(data => {
            console.log('User Found');
            console.log(data);
            if (!data)
                return "No user founds with name";
            else return data;
        })

}

// Signup a new User
exports.signUp = (req, res) => {

    // console.log(findUser(req.body));

    // Find if User already exist
    Users.find({ name: req.body.name })
        .then(data => {
            console.log(data);
            if (data.length === 0) {
                const user = new Users({
                    name: req.body.name,
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
            }
            else {
                res.json({ 'message': 'User already exist' })
            };

        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Users."
            });
        });
};

// Retrieve all Users from the database.
exports.userList = (req, res) => {
    Users.find()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};

// Clear user table
exports.clearUsers = (req, res) => {

    Users.remove({}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Users."
        });
    });
}

// Find a single User with an id
exports.findOne = (req, res) => {

};
