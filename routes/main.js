let express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/main", function(req, res) {
    res.render("main");
});

module.exports = router;