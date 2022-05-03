const express = require("express");
const router = express.Router();
const TopPSP = require("../models/topPSP");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopPSP.find({}, (err, foundTopPSP) => {
        res.json(foundTopPSP);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopPSP.findById(req.params.id, (err, foundOneTopPSP) => {
        res.json(foundOneTopPSP);
    });
});


module.exports = router;