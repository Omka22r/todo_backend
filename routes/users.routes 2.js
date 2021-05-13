module.exports = app => {

    const users = require("../controllers/users.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/users", users.signUp);

    // Retrieve all users
    router.get("/users", users.userList);

    // Delete all users
    router.delete("/users", users.clearUsers);

    app.use('/api', router);
};