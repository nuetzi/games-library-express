const express = require("express");
const router = express.Router();
const TopGamecube = require("../models/topGamecube");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopGamecube.find({}, (err, foundTopGamecube) => {
        res.json(foundTopGamecube);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopGamecube.findById(req.params.id, (err, foundOneTopGamecube) => {
        res.json(foundOneTopGamecube);
    });
});


module.exports = router;