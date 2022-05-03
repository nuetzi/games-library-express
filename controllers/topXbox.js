const express = require("express");
const router = express.Router();
const TopXbox = require("../models/topXbox");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopXbox.find({}, (err, foundTopXbox) => {
        res.json(foundTopXbox);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopXbox.findById(req.params.id, (err, foundOneTopXbox) => {
        res.json(foundOneTopXbox);
    });
});


module.exports = router;