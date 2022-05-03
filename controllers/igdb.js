const express = require("express");
const router = express.Router();
const Imports = require("../models/imports");

//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it


// Index Route
router.get("/", (req, res) => {
    Imports.find({}, (err, foundImports) => {
        res.json(foundImports);
    });
});

// Show Route
router.get("/:id", (req, res) => {
    Imports.findById(req.params.id, (err, foundImport) => {
        res.json(foundImport);
    });
});


module.exports = router;