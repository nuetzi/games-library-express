const mongoose = require("mongoose");

const top3DSSchema = new mongoose.Schema({
    id: Number,
    aggregated_rating: Number,
    cover: {
        id: Number,
        url: String
    },
    first_release_date: Number,
    genres: [{
        id: Number,
        name: String
    }],
    involved_companies: [{
        id: Number,
        company: {
            id: Number,
            name: String
        }
    }],
    name: String,
    platforms: [{
        id: Number,
        name: String
    }],
    rating: Number,
    storyline: String,
    summary: String,
    total_rating: Number,
    url: String
});

const Top3DS = mongoose.model("Top3DS", top3DSSchema, "top3DS");
module.exports = Top3DS;