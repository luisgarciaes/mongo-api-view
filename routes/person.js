let express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
let Person = require("../models/person");

router.get("/person", function(req, res) {
    res.render("person");
});

router.post("/addPerson", function(req, res) {
    const myPerson = new Person({
        name: req.body.name,
        age: req.body.age,
        bloodType: req.body.bloodType,
        ssn: req.body.ssn
    });
    myPerson.save();
});

module.exports = router;