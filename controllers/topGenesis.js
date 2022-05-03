const express = require("express");
const router = express.Router();
const TopGenesis = require("../models/topGenesis");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopGenesis.find({}, (err, foundTopGenesis) => {
        res.json(foundTopGenesis);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopGenesis.findById(req.params.id, (err, foundOneTopGenesis) => {
        res.json(foundOneTopGenesis);
    });
});


module.exports = router;