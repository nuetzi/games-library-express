const express = require("express");
const router = express.Router();
const TopN64 = require("../models/topN64");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopN64.find({}, (err, foundTopN64) => {
        res.json(foundTopN64);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopN64.findById(req.params.id, (err, foundOneTopN64) => {
        res.json(foundOneTopN64);
    });
});


module.exports = router;