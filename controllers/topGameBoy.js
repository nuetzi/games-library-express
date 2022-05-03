const express = require("express");
const router = express.Router();
const TopGameBoy = require("../models/topGameBoy");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopGameBoy.find({}, (err, foundTopGameBoy) => {
        res.json(foundTopGameBoy);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopGameBoy.findById(req.params.id, (err, foundOneTopGameBoy) => {
        res.json(foundOneTopGameBoy);
    });
});


module.exports = router;