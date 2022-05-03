const express = require("express");
const router = express.Router();
const TopPSVita = require("../models/topPSVita");
//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    TopPSVita.find({}, (err, foundTopPSVita) => {
        res.json(foundTopPSVita);
    });
});


// Show Route
router.get("/:id", (req, res) => {
    TopPSVita.findById(req.params.id, (err, foundOneTopPSVita) => {
        res.json(foundOneTopPSVita);
    });
});


module.exports = router;