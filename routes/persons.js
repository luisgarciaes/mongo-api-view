let express = require('express');
const mongoose = require("mongoose");
let router = express.Router();
let Person = require("../models/person");

router.get("/persons", function(req, res, next) {
    Person.find(function(err, persons) {
        if (err) return next(err);
        res.render('personsIndex', { persons });
    });
});

module.exports = router;