const express = require("express");
const router = express.Router();
const TopWiiU = require("../models/topWiiU");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopWiiU.find({}, (err, foundTopWiiU) => {
        res.json(foundTopWiiU);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopWiiU.findById(req.params.id, (err, foundOneTopWiiU) => {
        res.json(foundOneTopWiiU);
    });
});


module.exports = router;