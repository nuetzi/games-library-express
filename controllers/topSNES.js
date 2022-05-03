const express = require("express");
const router = express.Router();
const TopSNES = require("../models/topSNES");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopSNES.find({}, (err, foundTopSNES) => {
        res.json(foundTopSNES);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopSNES.findById(req.params.id, (err, foundOneTopSNES) => {
        res.json(foundOneTopSNES);
    });
});


module.exports = router;