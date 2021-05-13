const dbConfig = require("../config/db.config.js");
const config = require("config");


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.name = config.get('name');
db.mongoose = mongoose;
db.url = config.get('db.url');
db.users = require("./users.model.js")(mongoose);

module.exports = db;