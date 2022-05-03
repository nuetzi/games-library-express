const express = require("express");
const router = express.Router();
const TopRated = require("../models/topRated");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopRated.find({}, (err, foundTopRated) => {
        res.json(foundTopRated);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopRated.findById(req.params.id, (err, foundOneTopRated) => {
        res.json(foundOneTopRated);
    });
});


module.exports = router;