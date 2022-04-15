const express = require("express");
const path = require("path");
const home = require("./routes/home.js");
const form = require("./routes/form.js");

const application = express();

application.set("view engine", "twig");
application.use(express.json());
application.use(express.urlencoded({
    extended: true,
}));

application.use(express.static("public"));
application.use(express.static(path.join(__dirname,'/node_modules/bootstrap')));

application.use(form);
application.use(home);


application.listen(8080);