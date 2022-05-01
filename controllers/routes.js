const express = require("express");
const router = express.Router();
const Games = require("../models/games");

// Index Route
router.get("/", (req, res) => {
    Games.find({}, (err, foundGames) => {
        res.json(foundGames);
    });
});

// Delete Route
router.delete("/:id", (req, res) => {
    Games.findByIdAndRemove(req.params.id, (err, deletedGame) => {
        res.json(deletedGame);
    });
});

// Update Route
router.put("/:id", (req, res) => {
    Games.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGame) => {
        res.json(updatedGame);
    });
});

// Create Route
router.post("/", (req, res) => {
    Games.create(req.body, (err, createdGame) => {
        res.json(createdGame);
    });
});

// Show Route
router.get("/:id", (req, res) => {
    Games.findById(req.params.id, (err, foundGame) => {
        res.json(foundGame);
    });
});

module.exports = router;