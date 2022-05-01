const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genres: {type: String, required: true},
    year: {type: Number, required: true},
    cover: {type: String, required: true},
    rating: {type: Number},
    platforms: {type: String, required: true},
    summary: {type: String, required: true},
    url: {type: String}
});

const Games = mongoose.model("Game", gamesSchema);
module.exports = Games;