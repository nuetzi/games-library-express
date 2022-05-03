const express = require("express");
const router = express.Router();
const TopXboxOne = require("../models/topXboxOne");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopXboxOne.find({}, (err, foundTopXboxOne) => {
        res.json(foundTopXboxOne);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopXboxOne.findById(req.params.id, (err, foundOneTopXboxOne) => {
        res.json(foundOneTopXboxOne);
    });
});


module.exports = router;