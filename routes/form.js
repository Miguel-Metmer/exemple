const express = require("express");
const connection  = require("../models/database.js");
const bcrypt = require("bcrypt");

const form = express.Router();

form.get("/form", (req, res) => {
    res.render("form.twig");
});


form.post("/form", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, 10).then((result) => {
        connection.query("INSERT INTO users(email, password) VALUES(?, ?)", [email, result], (err, results, fields) => {
            if (err) {
                throw err;
            }
            else
            {
                res.redirect("/");
            }
        });
    })
});



module.exports = form;