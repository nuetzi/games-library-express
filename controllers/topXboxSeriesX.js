const express = require("express");
const router = express.Router();
const TopXboxSeriesX = require("../models/topXboxSeriesX");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopXboxSeriesX.find({}, (err, foundTopXboxSeriesX) => {
        res.json(foundTopXboxSeriesX);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopXboxSeriesX.findById(req.params.id, (err, foundOneTopXboxSeriesX) => {
        res.json(foundOneTopXboxSeriesX);
    });
});


module.exports = router;