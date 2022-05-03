const express = require("express");
const router = express.Router();
const TopXbox360 = require("../models/topXbox360");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopXbox360.find({}, (err, foundTopXbox360) => {
        res.json(foundTopXbox360);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopXbox360.findById(req.params.id, (err, foundOneTopXbox360) => {
        res.json(foundOneTopXbox360);
    });
});


module.exports = router;