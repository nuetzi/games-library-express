const express = require("express");
const router = express.Router();
const TopPS3 = require("../models/topPS3");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopPS3.find({}, (err, foundTopPS3) => {
        res.json(foundTopPS3);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopPS3.findById(req.params.id, (err, foundOneTopPS3) => {
        res.json(foundOneTopPS3);
    });
});


module.exports = router;