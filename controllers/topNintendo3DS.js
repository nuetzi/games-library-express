const express = require("express");
const router = express.Router();
const Top3DS = require("../models/topNintendo3DS");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    Top3DS.find({}, (err, foundTop3DS) => {
        res.json(foundTop3DS);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    Top3DS.findById(req.params.id, (err, foundOneTop3DS) => {
        res.json(foundOneTop3DS);
    });
});


module.exports = router;