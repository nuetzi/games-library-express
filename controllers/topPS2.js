const express = require("express");
const router = express.Router();
const TopPS2 = require("../models/topPS2");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopPS2.find({}, (err, foundTopPS2) => {
        res.json(foundTopPS2);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopPS2.findById(req.params.id, (err, foundOneTopPS2) => {
        res.json(foundOneTopPS2);
    });
});


module.exports = router;