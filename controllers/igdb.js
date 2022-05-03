const express = require("express");
const router = express.Router();
const TopImports = require("../models/imports");
const NESImports = require("../models/imports");
const SNESImports = require("../models/imports");

//NOTE: Since this data is what was returned from our external API query,
// We do not want the user to be able to modify it



router.get("/", (req, res) => {
    TopImports.find({}, (err, foundImports) => {
        res.json(foundImports);
    });
});

router.get("/", (req, res) => {
    NESImports.find({}, (err, foundImports) => {
        res.json(foundImports);
    });
});

router.get("/", (req, res) => {
    SNESImports.find({}, (err, foundImports) => {
        res.json(foundImports);
    });
});

// Show Route
router.get("/:id", (req, res) => {
    TopImports.findById(req.params.id, (err, foundImport) => {
        res.json(foundImport);
    });
});


module.exports = router;