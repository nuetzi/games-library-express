const express = require("express");
const router = express.Router();
const TopDreamcast = require("../models/topDreamcast");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopDreamcast.find({}, (err, foundTopDreamcast) => {
        res.json(foundTopDreamcast);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopDreamcast.findById(req.params.id, (err, foundOneTopDreamcast) => {
        res.json(foundOneTopDreamcast);
    });
});


module.exports = router;