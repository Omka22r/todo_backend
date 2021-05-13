const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const config = require("config");

const env = config.get('name');

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection

const db = require("./models");

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Connected to the ${db.name} database!`);
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome toDo Application Backend." });
// });

// Get Users
app.post("/users", (req, res) => {
    console.log(req.body);
    res.json({ message: "Users" });
});

require( "./routes/users.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});