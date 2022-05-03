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

// Create Route
router.post("/", (req, res) => {
    Imports.create(req.body, (err, createdImport) => {
        res.json(createdImport);
    });
});

// Show Route
router.get("/:id", (req, res) => {
    Imports.findById(req.params.id, (err, foundImport) => {
        res.json(foundImport);
    });
});


// Delete Route
router.delete("/:id", (req, res) => {
    Imports.findByIdAndRemove(req.params.id, (err, deletedImport) => {
        res.json(deletedImport);
    });
});

// Update Route
router.put("/:id", (req, res) => {
    Imports.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedImport) => {
        res.json(updatedImport);
    });
});


module.exports = router;