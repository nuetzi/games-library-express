const express = require("express");
const router = express.Router();
const TopPS4 = require("../models/topPS4");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopPS4.find({}, (err, foundTopPS4) => {
        res.json(foundTopPS4);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopPS4.findById(req.params.id, (err, foundOneTopPS4) => {
        res.json(foundOneTopPS4);
    });
});


module.exports = router;