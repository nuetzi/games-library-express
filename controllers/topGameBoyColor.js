const express = require("express");
const router = express.Router();
const TopGameBoyColor = require("../models/topGameBoyColor");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopGameBoyColor.find({}, (err, foundTopGameBoyColor) => {
        res.json(foundTopGameBoyColor);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopGameBoyColor.findById(req.params.id, (err, foundOneTopGameBoyColor) => {
        res.json(foundOneTopGameBoyColor);
    });
});


module.exports = router;