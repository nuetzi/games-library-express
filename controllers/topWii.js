const express = require("express");
const router = express.Router();
const TopWii = require("../models/topWii");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopWii.find({}, (err, foundTopWii) => {
        res.json(foundTopWii);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopWii.findById(req.params.id, (err, foundOneTopWii) => {
        res.json(foundOneTopWii);
    });
});


module.exports = router;