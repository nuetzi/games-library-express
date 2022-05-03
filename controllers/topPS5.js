const express = require("express");
const router = express.Router();
const TopPS5 = require("../models/topPS5");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopPS5.find({}, (err, foundTopPS5) => {
        res.json(foundTopPS5);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopPS5.findById(req.params.id, (err, foundOneTopPS5) => {
        res.json(foundOneTopPS5);
    });
});


module.exports = router;