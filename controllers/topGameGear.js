const express = require("express");
const router = express.Router();
const TopGameGear = require("../models/topGameGear");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopGameGear.find({}, (err, foundTopGameGear) => {
        res.json(foundTopGameGear);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopGameGear.findById(req.params.id, (err, foundOneTopGameGear) => {
        res.json(foundOneTopGameGear);
    });
});


module.exports = router;