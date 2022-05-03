const express = require("express");
const router = express.Router();
const TopNES = require("../models/topNES");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopNES.find({}, (err, foundTopNES) => {
        res.json(foundTopNES);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopNES.findById(req.params.id, (err, foundOneTopNES) => {
        res.json(foundOneTopNES);
    });
});


module.exports = router;