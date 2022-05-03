const express = require("express");
const router = express.Router();
const TopSwitch = require("../models/topSwitch");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopSwitch.find({}, (err, foundTopSwitch) => {
        res.json(foundTopSwitch);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopSwitch.findById(req.params.id, (err, foundOneTopSwitch) => {
        res.json(foundOneTopSwitch);
    });
});


module.exports = router;