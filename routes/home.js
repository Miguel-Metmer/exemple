const express = require("express");
const connection = require("../models/database.js");

const route = express.Router();


connection.query("SELECT * FROM users", (err, results, fields) => {
    if (err) {
        throw err;
    }
    else
    {
        route.get("/", (req, res) => {
            res.render("home.twig", {
                users : results
            });
        });
    }
});


module.exports = route;