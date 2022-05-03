const express = require("express");
const router = express.Router();
const TopGameBoyAdvance = require("../models/topGameBoyAdvance");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopGameBoyAdvance.find({}, (err, foundTopGameBoyAdvance) => {
        res.json(foundTopGameBoyAdvance);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopGameBoyAdvance.findById(req.params.id, (err, foundOneTopGameBoyAdvance) => {
        res.json(foundOneTopGameBoyAdvance);
    });
});


module.exports = router;