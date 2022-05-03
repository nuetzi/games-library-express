const express = require("express");
const router = express.Router();
const TopPS1 = require("../models/topPS1");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopPS1.find({}, (err, foundTopPS1) => {
        res.json(foundTopPS1);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopPS1.findById(req.params.id, (err, foundOneTopPS1) => {
        res.json(foundOneTopPS1);
    });
});


module.exports = router;