const express = require("express");
const router = express.Router();
const TopNintendoDS = require("../models/topNintendoDS");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopNintendoDS.find({}, (err, foundTopNintendoDS) => {
        res.json(foundTopNintendoDS);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopNintendoDS.findById(req.params.id, (err, foundOneTopNintendoDS) => {
        res.json(foundOneTopNintendoDS);
    });
});


module.exports = router;