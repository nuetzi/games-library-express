const express = require("express");
const router = express.Router();
const TopSaturn = require("../models/topSaturn");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopSaturn.find({}, (err, foundTopSaturn) => {
        res.json(foundTopSaturn);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopSaturn.findById(req.params.id, (err, foundOneTopSaturn) => {
        res.json(foundOneTopSaturn);
    });
});


module.exports = router;